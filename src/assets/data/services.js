import interiores from '../Imagenes/Services/servicio_1.jpg'
import viviendas from '../Imagenes/Services/servicio_2.jpg'
import licencias from '../Imagenes/Services/servicio_3.jpg'
import inventario from '../Imagenes/Services/servicio_4.jpg'
import firmas from '../Imagenes/Services/servicio_5.jpg'
import planos from '../Imagenes/Services/servicio_6.jpg'
import planeamiento from '../Imagenes/Services/servicio_7.jpg'
import edificacion from '../Imagenes/Services/servicio_8.jpg'
import estructuras from '../Imagenes/Services/servicio_9.jpg'

export const services = [
    {
        id: 1,
        title: "DISEÑO DE INTERIORES",
        image: interiores,
        items: ['Planificación Espacial', 'Ilumanicación Técnica', 'Estética Funcional'],
    },
    {
        id: 2,
        title: "DISEÑO DE VIVIENDAS",
        image: viviendas,
        items: ['Reconocimiento Legal', 'Ley 29090', 'Evite Multas (10%)'],
    },
    {
        id: 3,
        title: "LICENCIA DE EDIFICACIÓN",
        image: licencias,
        items: ['Certificado ITSE', 'Planos de evacuación', 'Aforo & Seguridad'],
    },
    {
        id: 4,
        title: "LICENCIA DE FUNCIONAMIENTO",
        image: inventario,
        items: ['Certificado ITSE', 'Planos de Evacuación', 'Aforo & Seguridad'],
    },
    {
        id: 5,
        title: "Declaratoria de Fábrica",
        image: firmas,
        items: ['Registro de SUNARP', 'Memoria Descriptiva', 'Valorización de Inmueble'],
    },
    {
        id: 6,
        title: "INDEPENDIZACIÓN DE PREDIOS",
        image: planos,
        items: ['Partida Registral Única', 'Reglamento interno', 'Venta & Hipoteca'],
    },
    {
        id: 7,
        title: "DIAGNÓSTICO ESTRUCTURAL",
        image: planeamiento,
        items: ['Identificaciónde de Riesgos', 'Ensayos con Tecnología', 'Dictamen Técnico(RNE)'],
    },
    {
        id: 8,
        title: "INGENIERÍA SISMORRESISTENTE",
        image: edificacion,
        items: ['Protección Sísmica', 'Estándares Internacionales', 'Viabilidad Constructiva'],
    },
    {
        id: 9,
        title: "REFORZAMIENTO Y OPTIMIZACIÓN",
        image: estructuras,
        items: ['Incremento de Carga', 'Reducción de Vulnerabilidad', 'Extensión de Vida Útil'],
    },
]