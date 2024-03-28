"use client"
import ContainerPage from "@/app/components/ContainerPage";
import TransitionPage from "@/app/components/TransitionPage";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';


const ContactMePage = () => {
    const alert = withReactContent(Swal);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const apiUrl = 'https://www.cpesigadvanced.com/WSAPIS/Core/WSEnviaCorreoSIG/Insert';
        const payload = {
            SDTEnviaCorreo: [
                {
                    Correo_ID: 1,
                    Correo_Perfil: "operadorFE",
                    Correo_Contacto: formData.email,
                    Correo_Titulo: "Mensaje desde formulario de contacto",
                    Correo_Adjunto: "",
                    Correo_Body: formData.message
                }
            ]
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // Puedes agregar aquí tus encabezados adicionales si es necesario
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                alert.fire({
                    icon: 'success',
                    title: <h2>Mesaje enviado con EXITO!!</h2>,
                    html: <p>Respondere lo mas pronto posible</p>,
                    timer: 7000,
                  })

                console.log('Correo enviado exitosamente');
                // Aquí puedes agregar lógica adicional después de enviar el correo
            } else {
                console.error('Error al enviar el correo');
            }
        } catch (error) {
            console.error('Error al enviar el correo:', error);
        }
    };

    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Contáctame : 
                </h1>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-secondary">Nombre</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            required
                            className="text-gray-700 mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondary">Correo electrónico</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            required
                            className="text-gray-700 mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-secondary">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            // rows="4"
                            required
                            className="text-gray-700 mt-1 p-2 block w-full border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-secondary hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary">
                            Enviar
                        </button>
                    </div>
                </form>

            </ContainerPage>
        </>
    );
}

export default ContactMePage;
