const navegacionn = document.querySelector('#navegacionn')

const crearNavHome = ()=>{
    navegacionn.innerHTML= `
        <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
            <p class="text-blue-900 font-bold text-xl">RESTAURANT APP </p>
    
            <!--ESTO ES PARA EL MOVIL-->
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10 md:hidden text-white cursor-pointer p-2 rounded-lg  hover:bg-blue-500">
                <path stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <!--PARA PC-->
            <div class="hidden md:flex flex-row gap-4">
                <a href="/login/" class="text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-150 ease-in-out">Login</a>
                <a href="/registro/" class="bg-white font-bold text-black hover:bg-blue-500 px-4 py-2 rounded-lg transition duration-150 ease-in-out">registro</a>
            </div>

        <!--MOVIL-->
        <div class="bg-blue-900/60 fixed top-16 right-0 left-0 bottom-0 justify-center text-center flex-col gap-4 hidden">
            <a href="/login/" class="text-white font-bold py-2 px-4 hover:bg-blue-700 rounded-lg transition ease-in-out">Login</a>
            <a href="/registro/" class="bg-white font-bold text-black hover:bg-blue-500 px-4 py-2 rounded-lg transition duration-150 ease-in-out">registro</a>
        </div>
    </div>
    `
}
const crearNavRegistro = ()=>{
    navegacionn.innerHTML= `
           <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
        <p class="text-blue-900 font-bold text-xl">RESTAURANT APP </p>

        <!--ESTO ES PARA EL MOVIL-->
        <svg xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10 md:hidden text-white cursor-pointer p-2 rounded-lg  hover:bg-blue-500">
            <path stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <!--PARA PC-->
        <div class="hidden md:flex flex-row gap-4">
            <a href="/login/" class="text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-150 ease-in-out">Login</a>
        </div>

         <!--MOVIL-->
        <div class="bg-blue-900/60 fixed top-16 right-0 left-0 bottom-0 justify-center text-center flex-col gap-4 hidden">
             <a href="/login/" class="text-white font-bold py-2 px-4 hover:bg-blue-700 rounded-lg transition ease-in-out">Login</a>
        </div>
</div>

    `
}
const crearNavLogin = ()=>{
    navegacionn.innerHTML= `
           <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
            <p class="text-blue-900 font-bold text-xl">RESTAURANT APP </p>
    
            <!--ESTO ES PARA EL MOVIL-->
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10 md:hidden text-white cursor-pointer p-2 rounded-lg  hover:bg-blue-500">
                <path stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <!--PARA PC-->
            <div class="hidden md:flex flex-row gap-4">
                <a href="/registro/" class="bg-white font-bold text-black hover:bg-blue-500 px-4 py-2 rounded-lg transition duration-150 ease-in-out">registro</a>
            </div>

        <!--MOVIL-->
        <div class="bg-blue-900/60 fixed top-16 right-0 left-0 bottom-0 justify-center text-center flex-col gap-4 hidden">
            <a href="/registro/" class="bg-white font-bold text-black hover:bg-blue-500 px-4 py-2 rounded-lg transition duration-150 ease-in-out">registro</a>
        </div>
    </div>
    `
}
 
//crearNavHome();

//agregar validaciones para generar la barra
if(window.location.pathname === '/'){
    crearNavHome();
}else if(window.location.pathname === '/registro/'){
    crearNavRegistro();
}else if(window.location.pathname === '/login/'){
    crearNavLogin();
}

//PARA EL MENU, la parte del despliegue en movil y agg la x

const navBtn = navegacionn.children[0].children[1]
//console.log(navBtn)

navBtn.addEventListener('click', e=>{
    //console.log('click')
    const menuMobile = navegacionn.children[0].children[3]
    //console.log(menuMobile)
    //hacer una conexion de si el menu esta activo o no

    if(!navBtn.classList.contains('active')){
        //hay que negarlo porque no la tenemos definidas y traera false, entonces negarlo se vuelve true
        //menu cerrado y vamos a mostar el despliegue
        navBtn.classList.add('active')
        navBtn.innerHTML  = `  
        <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        
        ` //cambiar el boton
        menuMobile.classList.remove('hidden');
        menuMobile.classList.add('flex');

    }else{
        navBtn.classList.remove('active')
        navBtn.innerHTML = `
         <path stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />`
        menuMobile.classList.remove('flex')
        menuMobile.classList.add('hidden') //funcion de logo del svg del menu

    }
})
