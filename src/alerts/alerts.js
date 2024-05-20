
import Swal from 'sweetalert2'


export const messageAddSucess = () => {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Creado correctamente",
        showConfirmButton: false,
        timer: 1000
      });
} 

export const messageDeleteSucess = () => {
    Swal.fire({
      position: "center",
      title: "Eliminado correctamente!",
      icon: "success",
      showConfirmButton: false,
      timer: 1000
    });
}

export const messageDuplicateError = () => {
  Swal.fire({
    position: "center",
    title: "Tarea Duplicada",
    icon: "error",
    showConfirmButton: false,
    timer: 1000
  });
}


export const deleteTodoPromise = async () => {

   return Swal.fire({
    title: "¿Estás seguro?",
    text: "¿Deseas eliminar esta tarea?",
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar"
  })
  
}

export const deleteAllTodosPromise = async () => {

  return Swal.fire({
   title: "¿Estás seguro?",
   text: "¿Deseas eliminar todas las tareas?",
   icon: "warning",
   showCancelButton: true,
   cancelButtonText: 'Cancelar',
   confirmButtonColor: "#3085d6",
   cancelButtonColor: "#d33",
   confirmButtonText: "Si, eliminar"
 })
 
}






    