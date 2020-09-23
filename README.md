## Laboratorio 1: Configuración y Uso de Git y GitHub

### a)	Configurar y usar Git localmente
   En base al siguiente tutorial: http://www.gabrielsaldana.org/platica_git.pdf

  <p align="center">
  <img  src="https://github.com/sharon1160/Project-locallibrary/blob/master/images/tutorial01/2.png">
  </p>
  
  <p align="center">
  <img  src="https://github.com/sharon1160/Project-locallibrary/blob/master/images/tutorial01/3.png">
  </p>
  
  <p align="center">
  <img  src="https://github.com/sharon1160/Project-locallibrary/blob/master/images/tutorial01/4.png">
  </p>
  
### b)	Configurar y usar GitHub
   En base al siguiente tutorial: https://www.freecodecamp.org/news/the-beginners-guide-to-git-github/
   
   #### - Type 01 : Create the repository, clone it to your PC, and work on it.(Recommended)

Teniendo git instalado y nuestro repositorio ya creado previamente, obtenemos la dirección HTTPS de la página de nuestro repositorio, luego realizamos un "git clone" para tener nuestro repositorio en nuestra computadora, entramos al proyecto, en este caso, "Project-locallibrary" y escribimos "git status" para verificar los archivos que hemos modificado (tutorial.txt).
   
  <p align="center">
  <img  src="https://github.com/sharon1160/Project-locallibrary/blob/master/images/tutorial02/type%2001/1.png">
  </p>
  
  
Después, hacemos uso del comando "git add [nombre del archivo modificado]" para agregar el archivo modificado, en este caso "git add tutorial.txt". Luego realizamos un "git commit -m [mensaje]", mensaje en el cual indicaremos que cambios se han realizado.
Para subir el archivo a GitHub enviamos el archivo a "remote", el cual generalmente se llama "origin". Para saber si se llama así hacemos un "git remote";y subimos el archivo a "origin" con el comando "git push origin master".

  <p align="center">
  <img  src="https://github.com/sharon1160/Project-locallibrary/blob/master/images/tutorial02/type%2001/2.png">
  </p>
  
  <p align="center">
  <img  src="https://github.com/sharon1160/Project-locallibrary/blob/master/images/tutorial02/type%2001/3.png">
  </p>
   
   #### - Type 02 : Work on your project locally then create the repository on GitHub and push it to remote.. 
   
Ingresamos a nuestro proyecto personal, escribimos el comando "git init" para inicializar el repositorio, luego realizamos un "git status" para revisar los archivos modificados, escribimos el comando "git add ." para agregar todos los files modificados y un "git commit -m [mensaje]".

  <p align="center">
  <img  src="https://github.com/sharon1160/Project-locallibrary/blob/master/images/tutorial02/type%2002/1.png">
  </p>
  
Creamos nuestro repositorio en GitHub sin un README.md, copiamos la direccion HTTPS y en la terminal ejecutamos el comando "git remote add origin [direccion HTTPS]" para crear el "remote" para nuestro repositorio. Después ejecutamos el comando "git remote",y si genera "origin",ha agregando el control remoto a su proyecto logrando así subir nuestro proyecto a GitHub sin ningún problema.
  
  <p align="center">
  <img  src="https://github.com/sharon1160/Project-locallibrary/blob/master/images/tutorial02/type%2002/2.png">
  </p>
  
  <p align="center">
  <img  src="https://github.com/sharon1160/Project-locallibrary/blob/master/images/tutorial02/type%2002/3.png">
  </p>
