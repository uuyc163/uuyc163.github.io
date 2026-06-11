window.CODES = {
 "cant-connect": {
  "cat": "Conexão / quedas",
  "name": "Não conecta / falha de conexão",
  "alias": "nao conecta falha de conexao impossivel conectar tempo esgotado nao entra cant connect 连不上",
  "sym": "O cliente diz \"não foi possível conectar ao computador remoto / falha / tempo esgotado\"; você não entra no host.",
  "cause": "Host desligado / não logado / offline, firewall ou antivírus bloqueando, interruptor remoto com defeito, IP de casa mudado ou porta ocupada.",
  "fix": "1) Confirme que o host está ligado, logado e online; 2) libere o UU Remote no firewall e antivírus; 3) desligue e ligue o interruptor remoto para resetar; 4) reinicie o roteador para renovar o IP; 5) se a porta 3389 estiver ocupada, mude-a ou pare o programa em conflito.",
  "prevent": "Dê ao host um IP de LAN fixo, adicione à lista confiável, mantenha ligado e online.",
  "sev": "Alta"
 },
 "black-screen": {
  "cat": "Imagem / tela preta",
  "name": "Tela preta ao conectar",
  "alias": "tela preta preto sem imagem black screen conectado preto 黑屏",
  "sym": "Conectado mas a imagem fica toda preta, muitas vezes enquanto você ouve som e vê o mouse.",
  "cause": "Resolução não suportada, resolução em tela cheia do jogo != resolução do streaming, driver de GPU antigo ou cache de bitmap persistente corrompido.",
  "fix": "1) Mude o host para uma resolução comum como 1080p; 2) coloque o jogo em tela cheia para janela; 3) atualize o driver de GPU; 4) desative o \"cache de bitmap persistente\" (aba Desempenho do RDP).",
  "prevent": "Use uma resolução compatível, mantenha o driver de GPU recente.",
  "sev": "Alta"
 },
 "lag": {
  "cat": "Latência / lag",
  "name": "Lag / atraso de entrada",
  "alias": "lag latencia atraso atraso de entrada engasgos travadas lento 卡顿",
  "sym": "Atraso de entrada perceptível, engasgos / quedas de quadros, resposta ruim.",
  "cause": "Congestionamento de rede / perda de pacotes, Wi-Fi fraco, pouco upload do host, bitrate acima da banda, ou latência anormal do codificador por um driver de GPU novo.",
  "fix": "1) Mude para cabo ou chegue perto do Wi-Fi 5 GHz; 2) baixe o limite de bitrate/banda para deixar folga; 3) verifique a perda de pacotes, feche outros apps que consomem banda; 4) reverta no host para um driver de GPU estável.",
  "prevent": "Prefira cabo; bitrate < upload com folga.",
  "sev": "Média"
 },
 "disconnect": {
  "cat": "Conexão / quedas",
  "name": "Quedas frequentes / cai em segundos",
  "alias": "desconexao quedas frequentes cai em segundos desconecta sempre disconnect 掉线",
  "sym": "Cai em poucos segundos ou um minuto, reconectando o tempo todo.",
  "cause": "Instabilidade de rede / perda, sem keep-alive configurado, problema de camada de segurança ou certificado, ou erro de protocolo TermDD X.224 (Event ID 50).",
  "fix": "1) Verifique a perda de pacotes e a estabilidade do roteamento; 2) configure um intervalo keep-alive no host; 3) examine a camada de segurança e a criptografia; 4) veja o Event ID 50 no Visualizador de Eventos para localizar a interrupção do protocolo.",
  "prevent": "Rede estável, camada de segurança e certificado corretos.",
  "sev": "Alta"
 },
 "no-audio": {
  "cat": "Som / periférico",
  "name": "Sem som",
  "alias": "sem som sem audio nao ouve mudo sem alto-falante 没声音",
  "sym": "A imagem vai bem mas não há som no lado remoto.",
  "cause": "O host não tem um dispositivo de áudio utilizável (um PC na nuvem / sem alto-falante mostra \"Nenhum alto-falante ou fone conectado\") ou o dispositivo de captura errado foi escolhido.",
  "fix": "1) Instale um dispositivo de áudio virtual (como VB-Cable) no host; 2) escolha o dispositivo de captura certo nas configurações; 3) se alguém estiver conectado, reconecte para aplicar.",
  "prevent": "Garanta que o host tenha um dispositivo de saída de áudio utilizável.",
  "sev": "Média"
 },
 "controller": {
  "cat": "Som / periférico",
  "name": "Controle / periférico não detectado",
  "alias": "controle gamepad nao detectado periferico teclado mouse joystick sem resposta 手柄",
  "sym": "Um controle, teclado/mouse ou outro periférico não é detectado ou não responde no lado remoto.",
  "cause": "Passthrough do controle não ativado no cliente, drivers do controle ausentes no host, ou outro programa segurando o dispositivo em exclusivo.",
  "fix": "1) Ative o passthrough de controle/periférico no UU Remote; 2) instale o driver do controle adequado no host; 3) reconecte e feche o programa que segura o dispositivo em exclusivo.",
  "prevent": "Instale os drivers com antecedência e ative o passthrough.",
  "sev": "Média"
 },
 "port-conflict": {
  "cat": "Conexão / quedas",
  "name": "Conflito de porta / problema de listener",
  "alias": "conflito de porta porta 3389 porta em uso listener netstat 端口",
  "sym": "Listener anormal / conexão recusada, comum em RDP auto-hospedado / mesma máquina.",
  "cause": "A porta RDP padrão 3389 (ou sua porta configurada) está em uso por outro programa.",
  "fix": "1) Use netstat -a -o para achar o PID que usa a porta; 2) combine com tasklist /svc; 3) mude a porta ou pare o programa em conflito, depois reinicie o serviço remoto.",
  "prevent": "Evite que várias ferramentas remotas disputem a mesma porta.",
  "sev": "Média"
 },
 "sleep-wake": {
  "cat": "Conexão / quedas",
  "name": "Inacessível em suspensão/hibernação",
  "alias": "suspensao hibernacao acordar wol wake on lan nao conecta dormindo 睡眠",
  "sym": "O host não responde e não conecta de jeito nenhum.",
  "cause": "O host entrou em suspensão ou hibernação, então a placa de rede está sem energia e não responde.",
  "fix": "1) Defina o plano de energia do host para nunca suspender/hibernar; 2) acorde-o com Wake-on-LAN ou a ligação remota do UU; 3) inicie a conexão após acordar.",
  "prevent": "Desative suspensão/hibernação, configure a ligação remota.",
  "sev": "Média"
 },
 "ipv6": {
  "cat": "Conexão / quedas",
  "name": "IPv6 causa conexão instável",
  "alias": "ipv6 instavel intermitente as vezes conecta instavel vai e volta 时连时断",
  "sym": "De forma intermitente não conecta, vai e volta, conecta de novo em outra rede.",
  "cause": "O sistema se adapta mal ao IPv6 e prefere uma rota IPv6 inalcançável.",
  "fix": "1) Desative o IPv6 temporariamente para testar se recupera; 2) coloque roteador/sistema em IPv4; 3) garanta que ambos os lados usem a mesma pilha de rede.",
  "prevent": "Mantenha ambos os lados na mesma pilha; desative IPv6 se preciso.",
  "sev": "Baixa"
 },
 "artifacts": {
  "cat": "Imagem / tela preta",
  "name": "Artefatos / imagem borrada",
  "alias": "artefatos borrada borrado macrobloco pixelado baixa qualidade 花屏",
  "sym": "Artefatos / macroblocos, ou uma imagem no geral borrada e pouco nítida.",
  "cause": "Bitrate baixo demais e reduzido automaticamente, decodificação por hardware anormal, ou perda de pacotes quebrando a imagem.",
  "fix": "1) Aumente o bitrate; 2) desative a decodificação por hardware no host/cliente para testar a por software; 3) verifique a perda de pacotes e a estabilidade da rede.",
  "prevent": "Dê bitrate suficiente; mantenha a rede estável e sem perdas.",
  "sev": "Baixa"
 },
 "security-error": {
  "cat": "Conexão / quedas",
  "name": "Erro de segurança - não conecta",
  "alias": "erro de seguranca security error certificado criptografia autenticacao credenciais 安全错误",
  "sym": "Mostra \"devido a um erro de segurança, o cliente não pôde conectar ao computador remoto\".",
  "cause": "Camada de autenticação/criptografia mal configurada, ou um certificado de licença (autorização) corrompido.",
  "fix": "1) Configure a camada de segurança e o nível de criptografia corretos; 2) se o certificado de licença estiver corrompido, após backup exclua as chaves de registro do certificado X509 e reative o serviço de licenciamento; 3) confirme que hora e credenciais estão corretas.",
  "prevent": "Certificado e configuração de licenciamento corretos.",
  "sev": "Alta"
 },
 "no-permission": {
  "cat": "Som / periférico",
  "name": "Conta sem permissão remota",
  "alias": "sem permissao acesso negado usuarios da area de trabalho remota limite de conexoes direitos de logon 权限",
  "sym": "Após logar você não consegue iniciar o controle remoto, com aviso de falta de permissão ou negação.",
  "cause": "A conta não está no grupo \"Usuários da Área de Trabalho Remota\", ou a diretiva \"Limitar número de conexões\" bloqueia.",
  "fix": "1) Adicione a conta ao grupo \"Usuários da Área de Trabalho Remota\" do host; 2) verifique e flexibilize a diretiva de grupo \"Limitar número de conexões\"; 3) confirme que a conta tem direitos de logon remoto.",
  "prevent": "Autorize as contas corretamente, política de limite de conexões razoável.",
  "sev": "Média"
 }
};
window.LABELS = {"miss": "Não listado - tente outra forma (ex.: não conecta / tela preta / lag / sem som / controle) ou veja a tabela completa abaixo.", "codeword": ""};
window.FIELDS = [["sym", "Sintoma"], ["cause", "Causa mais provável"], ["fix", "Passos de solução"], ["prevent", "Prevenção / autoverificação"], ["sev", "Gravidade"]];
window.THEAD = ["Problema", "Categoria", "Sintoma", "Direção de solução"];
window.CHIPS = ["não conecta", "tela preta", "lag", "sem som", "desconexão", "controle"];
