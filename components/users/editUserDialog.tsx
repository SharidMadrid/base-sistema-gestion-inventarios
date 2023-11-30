import * as React from "react";
import { DialogTitle, DialogContent, DialogContentText } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useEffect } from "react";
import { useForm } from "@mantine/form";
import { notify } from "@/utils/toast";

interface HireDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  roles: roles[];
  selectedUser: {
    id: string;
    email: string;
    roleId: string;
    name: string;
  };
}

interface roles {
  id: string;
  name: string;
}

function EditUserDialog(props: HireDialogProps) {
  const { onClose, selectedValue, open, roles, selectedUser } = props;

  const form = useForm({
    initialValues: {
      id: "",
      email: "",
      roleId: "",
      name: "",
    },
  });

  useEffect(() => {
    form.setValues({
      id: selectedUser.id,
      email: selectedUser.email,
      roleId: selectedUser.roleId,
      name: selectedUser.name,
    });
  }, [selectedUser]);

  const updateUser = async () => {
    if (form.values.id === "") {
      alert("Debe seleccionar un usuario");
      return;
    }
    try {
      let result = await fetch(
        `http://localhost:3000/api/users/${form.values.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            roleId: form.values.roleId,
            name: form.values.name,
            email: form.values.email,
          }),
        }
      ).then((response) => response.json());
      if (result !== null) {
        notify("success", "Usuario actualizado");
        onClose(selectedValue);
      }
    } catch (err) {
      notify("error", "Error al actualizar usuario");
      return err;
    }
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open} maxWidth="xl">
      <DialogTitle className="flex flex-wrap justify-center font-bold text-2xl">
        Edición de usuario
      </DialogTitle>
      <DialogContent className="flex flex-col flex-wrap justify-center">
        <div>
          <h1>Usuarios</h1>
        </div>
        <div>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Identificador</th>
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Correo</th>
                <th className="px-4 py-2">Rol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">{form.values.id}</td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    value={form.values.name}
                    onChange={(e) =>
                      form.setFieldValue("name", e.currentTarget.value)
                    }
                  />
                </td>
                <td className="border px-4 py-2">{form.values.email}</td>
                <td className="border px-4 py-2">
                  <select
                    onChange={(e) =>
                      form.setFieldValue("roleId", e.target.value)
                    }
                    value={form.values.roleId}
                  >
                    {roles.map((role) => (
                      <option key={role.id} value={role.id}>
                        {role.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <button
            className="m-5 py-2 px-5 rounded-lg text-slate-50 bg-cyan-700 hover:bg-cyan-800 font-bold text-lg glow-on-hover"
            onClick={updateUser}
          >
            Actualizar
          </button>
          <button
            className="m-5 py-2 px-5 rounded-lg text-slate-50 bg-cyan-700 hover:bg-cyan-800 font-bold text-lg"
            onClick={handleClose}
          >
            Cerrar
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default EditUserDialog;