window.CODES = {
 "cant-connect": {
  "cat": "Conexión / caídas",
  "name": "No conecta / conexión fallida",
  "alias": "no conecta no conexion conexion fallida tiempo de espera no entra cant connect 连不上",
  "sym": "El cliente dice \"no se pudo conectar al equipo remoto / conexión fallida / tiempo de espera\"; no entras al host.",
  "cause": "Host apagado / sin sesión / fuera de línea, firewall o antivirus bloqueando, interruptor remoto defectuoso, IP de casa cambiada o puerto ocupado.",
  "fix": "1) Confirma que el host está encendido, con sesión y en línea; 2) permite UU Remote en firewall y antivirus; 3) apaga y enciende el interruptor remoto; 4) reinicia el router para renovar la IP; 5) si el puerto 3389 está ocupado, cámbialo o detén el programa en conflicto.",
  "prevent": "Da al host una IP LAN fija, añádelo a la lista de confianza, mantenlo encendido y en línea.",
  "sev": "Alta"
 },
 "black-screen": {
  "cat": "Imagen / pantalla negra",
  "name": "Pantalla negra al conectar",
  "alias": "pantalla negra negro sin imagen black screen conectado negro 黑屏",
  "sym": "Conectado pero la imagen está totalmente negra, a menudo mientras oyes sonido y ves el ratón.",
  "cause": "Resolución no soportada, resolución a pantalla completa del juego != la del streaming, controlador de GPU antiguo o caché de mapa de bits persistente dañada.",
  "fix": "1) Cambia el host a una resolución común como 1080p; 2) pon el juego a pantalla completa en ventana; 3) actualiza el controlador de GPU; 4) desactiva la \"caché de mapa de bits persistente\" (pestaña Rendimiento de RDP).",
  "prevent": "Usa una resolución compatible, mantén el controlador de GPU reciente.",
  "sev": "Alta"
 },
 "lag": {
  "cat": "Latencia / lag",
  "name": "Lag / retardo de entrada",
  "alias": "lag latencia retardo retardo de entrada tirones cortes lento 卡顿",
  "sym": "Retardo de entrada notable, tirones / pérdida de fotogramas, mala respuesta.",
  "cause": "Congestión de red / pérdida de paquetes, WiFi débil, poca subida del host, bitrate por encima del ancho de banda, o latencia anormal del codificador por un controlador de GPU nuevo.",
  "fix": "1) Pasa a cable o acércate al WiFi 5GHz; 2) baja el límite de bitrate/ancho de banda para dejar margen; 3) revisa la pérdida de paquetes, cierra otras apps que consumen ancho de banda; 4) revierte el controlador de GPU del host a una versión estable.",
  "prevent": "Prefiere el cable; bitrate < subida con margen.",
  "sev": "Media"
 },
 "disconnect": {
  "cat": "Conexión / caídas",
  "name": "Caídas frecuentes / cae a los segundos",
  "alias": "desconexion caidas frecuentes cae a los segundos se desconecta siempre disconnect 掉线",
  "sym": "Cae a los pocos segundos o a un minuto, reconectando una y otra vez.",
  "cause": "Inestabilidad de red / pérdida, sin keep-alive configurado, un problema de capa de seguridad o certificado, o un error de protocolo TermDD X.224 (Event ID 50).",
  "fix": "1) Revisa la pérdida de paquetes y la estabilidad del enrutamiento; 2) configura un intervalo keep-alive en el host; 3) revisa la capa de seguridad y el cifrado; 4) mira el Event ID 50 del Visor de eventos para localizar la interrupción del protocolo.",
  "prevent": "Red estable, capa de seguridad y certificado correctos.",
  "sev": "Alta"
 },
 "no-audio": {
  "cat": "Sonido / periférico",
  "name": "Sin sonido",
  "alias": "sin sonido sin audio no se oye silencio mute sin altavoz 没声音",
  "sym": "La imagen va bien pero no hay sonido en el extremo remoto.",
  "cause": "El host no tiene un dispositivo de audio utilizable (un PC en la nube / sin altavoz muestra \"No hay altavoces ni auriculares conectados\") o se eligió el dispositivo de captura equivocado.",
  "fix": "1) Instala un dispositivo de audio virtual (como VB-Cable) en el host; 2) elige el dispositivo de captura correcto en ajustes; 3) si alguien está conectado, reconecta para que se aplique.",
  "prevent": "Asegura que el host tenga un dispositivo de salida de audio utilizable.",
  "sev": "Media"
 },
 "controller": {
  "cat": "Sonido / periférico",
  "name": "Mando / periférico no detectado",
  "alias": "mando gamepad no detectado periferico teclado raton joystick sin respuesta 手柄",
  "sym": "Un mando, teclado/ratón u otro periférico no se detecta o no responde en el extremo remoto.",
  "cause": "Passthrough del mando no activado en el cliente, controladores del mando faltantes en el host, u otro programa que ocupa el dispositivo en exclusiva.",
  "fix": "1) Activa el passthrough de mando/periférico en UU Remote; 2) instala el controlador del mando en el host; 3) reconecta y cierra el programa que ocupa el dispositivo en exclusiva.",
  "prevent": "Instala controladores con antelación y activa el passthrough.",
  "sev": "Media"
 },
 "port-conflict": {
  "cat": "Conexión / caídas",
  "name": "Conflicto de puerto / problema de escucha",
  "alias": "conflicto de puerto puerto 3389 puerto en uso escucha listener netstat 端口",
  "sym": "Escucha anómala / conexión rechazada, común en RDP autoalojado / misma máquina.",
  "cause": "El puerto RDP predeterminado 3389 (o tu puerto configurado) lo usa otro programa.",
  "fix": "1) Usa netstat -a -o para hallar el PID que usa el puerto; 2) emparéjalo con tasklist /svc; 3) cambia el puerto o detén el programa en conflicto, luego reinicia el servicio remoto.",
  "prevent": "Evita que varias herramientas remotas peleen por el mismo puerto.",
  "sev": "Media"
 },
 "sleep-wake": {
  "cat": "Conexión / caídas",
  "name": "Inaccesible en suspensión/hibernación",
  "alias": "suspension hibernacion despertar wol wake on lan no conecta dormido 睡眠",
  "sym": "El host no responde y no conecta de ninguna manera.",
  "cause": "El host entró en suspensión o hibernación, así que la tarjeta de red está sin energía y no responde.",
  "fix": "1) Pon el plan de energía del host en no suspender/hibernar nunca; 2) despiértalo con Wake-on-LAN o el encendido remoto de UU; 3) inicia la conexión tras despertar.",
  "prevent": "Desactiva suspensión/hibernación, configura el encendido remoto.",
  "sev": "Media"
 },
 "ipv6": {
  "cat": "Conexión / caídas",
  "name": "IPv6 causa una conexión inestable",
  "alias": "ipv6 inestable intermitente a veces conecta inestable va y viene 时连时断",
  "sym": "Intermitentemente no conecta, va y viene, conecta de nuevo en otra red.",
  "cause": "El sistema se adapta mal a IPv6 y prefiere una ruta IPv6 inalcanzable.",
  "fix": "1) Desactiva IPv6 temporalmente para probar si se recupera; 2) pon el router/sistema en IPv4; 3) asegura que ambos extremos usen la misma pila de red.",
  "prevent": "Mantén ambos extremos en la misma pila; desactiva IPv6 si hace falta.",
  "sev": "Baja"
 },
 "artifacts": {
  "cat": "Imagen / pantalla negra",
  "name": "Artefactos / imagen borrosa",
  "alias": "artefactos borrosa difusa macrobloque pixelada baja calidad 花屏",
  "sym": "Artefactos / macrobloques, o una imagen en general borrosa y poco clara.",
  "cause": "Bitrate demasiado bajo y reducido automáticamente, decodificación por hardware anómala, o pérdida de paquetes que rompe la imagen.",
  "fix": "1) Sube el bitrate; 2) desactiva la decodificación por hardware en host/cliente para probar decodificación por software; 3) revisa la pérdida de paquetes y la estabilidad de red.",
  "prevent": "Da suficiente bitrate; mantén la red estable y sin pérdidas.",
  "sev": "Baja"
 },
 "security-error": {
  "cat": "Conexión / caídas",
  "name": "Error de seguridad - no conecta",
  "alias": "error de seguridad security error certificado cifrado autenticacion credenciales 安全错误",
  "sym": "Dice \"por un error de seguridad, el cliente no pudo conectar al equipo remoto\".",
  "cause": "Capa de autenticación/cifrado mal configurada, o un certificado de licencia (autorización) dañado.",
  "fix": "1) Configura la capa de seguridad y el nivel de cifrado correctos; 2) si el certificado de licencia está dañado, tras hacer copia elimina las claves de registro del certificado X509 y reactiva el servicio de licencias; 3) confirma que la hora y las credenciales sean correctas.",
  "prevent": "Certificado y configuración de licencias correctos.",
  "sev": "Alta"
 },
 "no-permission": {
  "cat": "Sonido / periférico",
  "name": "La cuenta no tiene permiso remoto",
  "alias": "sin permiso permiso denegado acceso denegado usuarios de escritorio remoto limite de conexiones 权限",
  "sym": "Tras iniciar sesión no puedes empezar el control remoto, con aviso de falta de permiso o denegación.",
  "cause": "La cuenta no está en el grupo \"Usuarios de Escritorio remoto\", o la directiva \"Limitar número de conexiones\" lo bloquea.",
  "fix": "1) Añade la cuenta al grupo \"Usuarios de Escritorio remoto\" del host; 2) revisa y relaja la directiva de grupo \"Limitar número de conexiones\"; 3) confirma que la cuenta tiene derechos de inicio de sesión remoto.",
  "prevent": "Autoriza las cuentas correctamente, política de límite de conexiones razonable.",
  "sev": "Media"
 }
};
window.LABELS = {"miss": "No listado - prueba otra forma (p. ej. no conecta / pantalla negra / lag / sin sonido / mando) o mira la tabla completa abajo.", "codeword": ""};
window.FIELDS = [["sym", "Síntoma"], ["cause", "Causa más probable"], ["fix", "Pasos de solución"], ["prevent", "Prevención / autocomprobación"], ["sev", "Gravedad"]];
window.THEAD = ["Problema", "Categoría", "Síntoma", "Dirección de solución"];
window.CHIPS = ["no conecta", "pantalla negra", "lag", "sin sonido", "desconexión", "mando"];
