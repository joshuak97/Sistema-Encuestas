export class Encuesta{

    id_encuesta: number;
    nombre_cuestionario: string;
    expiracion: string;
    fecha_registro: string;
    ultima_modificacion: string;
    usuario_captura: string;
    preguntas: Pregunta[];
}

export class Pregunta{
    id_pregunta: number;
    pregunta: string;
    limite_respuestas: number;
    usuario_captura: string;
    fecha_registro: string;
    ultima_modificacion: string;
    id_tipo_pregunta: number;
    id_encuesta: number;
    Respuestas: Respuesta[];
}

export class Respuesta{
   id_respuesta: number;
   respuesta: string;
   id_pregunta: number;
   fecha_registro: string;
   ultima_modificacion: string;
}

export class ResultadoEncuesta {
    id_resultado: number;
    id_prospecto: number;
    id_pregunta: number;
    id_respuesta: number;
    completado: number;
    fecha_registro: string;
    ultima_modificacion: string;
}