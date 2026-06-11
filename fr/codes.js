window.CODES = {
 "cant-connect": {
  "cat": "Connexion / coupures",
  "name": "Ne se connecte pas / échec de connexion",
  "alias": "ne se connecte pas connexion echouee impossible de se connecter delai d'attente cant connect 连不上",
  "sym": "Le client dit \"impossible de se connecter à l'ordinateur distant / échec / délai d'attente\" ; vous n'entrez pas dans l'hôte.",
  "cause": "Hôte éteint / non connecté / hors ligne, pare-feu ou antivirus qui bloque, interrupteur distant défectueux, IP de la maison changée ou port occupé.",
  "fix": "1) Confirmez que l'hôte est allumé, connecté et en ligne ; 2) autorisez UU Remote dans le pare-feu et l'antivirus ; 3) éteignez puis rallumez l'interrupteur distant pour réinitialiser ; 4) redémarrez le routeur pour renouveler l'IP ; 5) si le port 3389 est occupé, changez-le ou arrêtez le programme en conflit.",
  "prevent": "Donnez à l'hôte une IP LAN fixe, ajoutez-le à la liste de confiance, gardez-le allumé et en ligne.",
  "sev": "Élevée"
 },
 "black-screen": {
  "cat": "Image / écran noir",
  "name": "Écran noir après connexion",
  "alias": "ecran noir noir pas d'image black screen connecte noir 黑屏",
  "sym": "Connecté mais l'image est totalement noire, souvent alors que vous entendez le son et voyez la souris.",
  "cause": "Résolution non prise en charge, résolution plein écran du jeu != résolution du streaming, pilote GPU ancien ou cache bitmap persistant corrompu.",
  "fix": "1) Passez l'hôte sur une résolution courante comme 1080p ; 2) mettez le jeu plein écran en fenêtre ; 3) mettez à jour le pilote GPU ; 4) désactivez le \"cache bitmap persistant\" (onglet Performances de RDP).",
  "prevent": "Utilisez une résolution compatible, gardez le pilote GPU récent.",
  "sev": "Élevée"
 },
 "lag": {
  "cat": "Latence / lag",
  "name": "Lag / délai de saisie",
  "alias": "lag latence delai delai de saisie saccades a-coups lent 卡顿",
  "sym": "Délai de saisie notable, saccades / images perdues, mauvaise réactivité.",
  "cause": "Congestion réseau / perte de paquets, Wi-Fi faible, faible débit montant de l'hôte, débit au-dessus de la bande passante, ou latence d'encodeur anormale due à un nouveau pilote GPU.",
  "fix": "1) Passez au câble ou rapprochez-vous du Wi-Fi 5 GHz ; 2) baissez la limite de débit/bande passante pour laisser de la marge ; 3) vérifiez la perte de paquets, fermez les autres applis gourmandes ; 4) revenez sur l'hôte à un pilote GPU stable.",
  "prevent": "Préférez le câble ; débit < débit montant avec marge.",
  "sev": "Moyenne"
 },
 "disconnect": {
  "cat": "Connexion / coupures",
  "name": "Coupures fréquentes / coupe au bout de secondes",
  "alias": "deconnexion coupures frequentes coupe au bout de secondes se deconnecte sans cesse disconnect 掉线",
  "sym": "Coupe au bout de quelques secondes ou d'une minute, en se reconnectant sans cesse.",
  "cause": "Instabilité réseau / perte, pas de keep-alive configuré, un problème de couche de sécurité ou de certificat, ou une erreur de protocole TermDD X.224 (Event ID 50).",
  "fix": "1) Vérifiez la perte de paquets et la stabilité du routage ; 2) configurez un intervalle keep-alive sur l'hôte ; 3) examinez la couche de sécurité et le chiffrement ; 4) consultez l'Event ID 50 de l'Observateur d'événements pour localiser l'interruption du protocole.",
  "prevent": "Réseau stable, couche de sécurité et certificat corrects.",
  "sev": "Élevée"
 },
 "no-audio": {
  "cat": "Son / périphérique",
  "name": "Pas de son",
  "alias": "pas de son aucun son n'entend rien muet sans haut-parleur 没声音",
  "sym": "L'image est bonne mais il n'y a pas de son côté distant.",
  "cause": "L'hôte n'a pas de périphérique audio utilisable (un PC cloud / sans haut-parleur affiche \"Aucun haut-parleur ou casque n'est branché\") ou le mauvais périphérique de capture est choisi.",
  "fix": "1) Installez un périphérique audio virtuel (comme VB-Cable) sur l'hôte ; 2) choisissez le bon périphérique de capture dans les réglages ; 3) si quelqu'un est connecté, reconnectez pour appliquer.",
  "prevent": "Assurez-vous que l'hôte a un périphérique de sortie audio utilisable.",
  "sev": "Moyenne"
 },
 "controller": {
  "cat": "Son / périphérique",
  "name": "Manette / périphérique non détecté",
  "alias": "manette gamepad non detectee peripherique clavier souris joystick aucune reponse 手柄",
  "sym": "Une manette, un clavier/souris ou un autre périphérique n'est pas détecté ou ne répond pas côté distant.",
  "cause": "Passthrough de manette non activé sur le client, pilotes de manette manquants sur l'hôte, ou un autre programme qui tient le périphérique en exclusivité.",
  "fix": "1) Activez le passthrough manette/périphérique dans UU Remote ; 2) installez le pilote de manette adapté sur l'hôte ; 3) reconnectez et fermez le programme qui tient le périphérique en exclusivité.",
  "prevent": "Installez les pilotes à l'avance et activez le passthrough.",
  "sev": "Moyenne"
 },
 "port-conflict": {
  "cat": "Connexion / coupures",
  "name": "Conflit de port / problème d'écoute",
  "alias": "conflit de port port 3389 port occupe ecoute listener netstat 端口",
  "sym": "Écoute anormale / connexion refusée, fréquent en RDP auto-hébergé / même machine.",
  "cause": "Le port RDP par défaut 3389 (ou votre port configuré) est utilisé par un autre programme.",
  "fix": "1) Utilisez netstat -a -o pour trouver le PID qui utilise le port ; 2) associez-le avec tasklist /svc ; 3) changez le port ou arrêtez le programme en conflit, puis redémarrez le service distant.",
  "prevent": "Évitez que plusieurs outils distants se disputent le même port.",
  "sev": "Moyenne"
 },
 "sleep-wake": {
  "cat": "Connexion / coupures",
  "name": "Injoignable en veille/veille prolongée",
  "alias": "veille veille prolongee reveil wol wake on lan ne se connecte pas endormi 睡眠",
  "sym": "L'hôte ne répond pas et ne se connecte absolument pas.",
  "cause": "L'hôte est passé en veille ou veille prolongée, la carte réseau est hors tension et ne répond pas.",
  "fix": "1) Réglez le plan d'alimentation de l'hôte sur jamais de veille/veille prolongée ; 2) réveillez-le avec Wake-on-LAN ou l'allumage distant UU ; 3) démarrez la connexion après le réveil.",
  "prevent": "Désactivez veille/veille prolongée, configurez l'allumage distant.",
  "sev": "Moyenne"
 },
 "ipv6": {
  "cat": "Connexion / coupures",
  "name": "IPv6 provoque une connexion instable",
  "alias": "ipv6 instable intermittent se connecte parfois instable par moments 时连时断",
  "sym": "Par intermittence ne se connecte pas, ça va et vient, se connecte à nouveau sur un autre réseau.",
  "cause": "Le système s'adapte mal à IPv6 et préfère un chemin IPv6 injoignable.",
  "fix": "1) Désactivez IPv6 temporairement pour tester s'il récupère ; 2) passez le routeur/système en IPv4 ; 3) assurez-vous que les deux côtés utilisent la même pile réseau.",
  "prevent": "Gardez les deux côtés sur la même pile ; désactivez IPv6 si besoin.",
  "sev": "Faible"
 },
 "artifacts": {
  "cat": "Image / écran noir",
  "name": "Artefacts / image floue",
  "alias": "artefacts flou flou macrobloc pixelise mauvaise qualite 花屏",
  "sym": "Artefacts / macroblocs, ou une image globalement floue et peu nette.",
  "cause": "Débit trop bas et réduit automatiquement, décodage matériel anormal, ou perte de paquets qui casse l'image.",
  "fix": "1) Augmentez le débit ; 2) désactivez le décodage matériel sur l'hôte/client pour essayer le décodage logiciel ; 3) vérifiez la perte de paquets et la stabilité réseau.",
  "prevent": "Donnez assez de débit ; gardez le réseau stable et sans perte.",
  "sev": "Faible"
 },
 "security-error": {
  "cat": "Connexion / coupures",
  "name": "Erreur de sécurité - ne se connecte pas",
  "alias": "erreur de securite security error certificat chiffrement authentification identifiants 安全错误",
  "sym": "Affiche \"en raison d'une erreur de sécurité, le client n'a pas pu se connecter à l'ordinateur distant\".",
  "cause": "Couche d'authentification/chiffrement mal configurée, ou un certificat de licence (autorisation) corrompu.",
  "fix": "1) Configurez la bonne couche de sécurité et le niveau de chiffrement ; 2) si le certificat de licence est corrompu, après sauvegarde supprimez les clés de registre du certificat X509 et réactivez le service de licences ; 3) confirmez que l'heure et les identifiants sont corrects.",
  "prevent": "Certificat et configuration de licences corrects.",
  "sev": "Élevée"
 },
 "no-permission": {
  "cat": "Son / périphérique",
  "name": "Le compte n'a pas de permission distante",
  "alias": "pas de permission acces refuse utilisateurs du bureau a distance limite de connexions droits d'ouverture 权限",
  "sym": "Après connexion vous ne pouvez pas démarrer le contrôle distant, avec un message de permission manquante ou de refus.",
  "cause": "Le compte n'est pas dans le groupe \"Utilisateurs du Bureau à distance\", ou la stratégie \"Limiter le nombre de connexions\" bloque.",
  "fix": "1) Ajoutez le compte au groupe \"Utilisateurs du Bureau à distance\" de l'hôte ; 2) vérifiez et assouplissez la stratégie de groupe \"Limiter le nombre de connexions\" ; 3) confirmez que le compte a des droits d'ouverture de session à distance.",
  "prevent": "Autorisez les comptes correctement, politique de limite de connexions raisonnable.",
  "sev": "Moyenne"
 }
};
window.LABELS = {"miss": "Non listé - essayez une autre formulation (p. ex. ne se connecte pas / écran noir / lag / pas de son / manette) ou consultez le tableau complet ci-dessous.", "codeword": ""};
window.FIELDS = [["sym", "Symptôme"], ["cause", "Cause la plus probable"], ["fix", "Étapes de résolution"], ["prevent", "Prévention / auto-vérification"], ["sev", "Gravité"]];
window.THEAD = ["Problème", "Catégorie", "Symptôme", "Direction de résolution"];
window.CHIPS = ["ne se connecte pas", "écran noir", "lag", "pas de son", "déconnexion", "manette"];
