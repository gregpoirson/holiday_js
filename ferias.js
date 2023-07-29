//definições das ferias do time
//uma linha para cada intervalo de ferias
//depois será feito uma consolidação por pessoa/por mês

//os campos obrigatorios são : nome, start, end
//o(s) campos opcionais são : observacao
//exemplo : feriasBase.push({nome:'Diogo A', start:'27/02/2023', end:'12/03/2023', observacao: 'Bora Bora'});

var feriasBase = [];

feriasBase.push({nome:'Alessandra', start:'06/11/2023', end:'19/11/2023'});
feriasBase.push({nome:'Alessandra', start:'02/10/2023', end:'11/10/2023'});
feriasBase.push({nome:'Alessandra', start:'11/09/2023', end:'16/09/2023'});
feriasBase.push({nome:'Alessandra', start:'24/04/2023', end:'29/04/2023'});
feriasBase.push({nome:'Alessandra', start:'16/11/2022', end:'30/11/2022'});
feriasBase.push({nome:'Alessandra', start:'29/08/2022', end:'07/09/2022'});
feriasBase.push({nome:'Alessandra', start:'25/04/2022', end:'30/04/2022'});
feriasBase.push({nome:'Alessandra', start:'02/03/2022', end:'11/03/2022'});

feriasBase.push({nome:'Brasil', start:'02/01/2023', end:'21/01/2023'});
feriasBase.push({nome:'Brasil', start:'03/01/2022', end:'22/01/2022' });

feriasBase.push({nome:'Cecilia', start:'22/02/2023', end:'08/03/2023'});

feriasBase.push({nome:'Cesar Barros', start:'15/01/2024', end:'29/01/2024', observacao: 'Veni, vidi vici' });
feriasBase.push({nome:'Cesar Barros', start:'12/07/2023', end:'26/07/2023'});

feriasBase.push({nome:'Diego', start:'24/07/2023', end:'29/07/2023'});
feriasBase.push({nome:'Diego', start:'06/03/2023', end:'19/03/2023'});
feriasBase.push({nome:'Diego', start:'09/08/2022', end:'14/08/2022'});
feriasBase.push({nome:'Diego', start:'18/07/2022', end:'31/07/2022'});

feriasBase.push({nome:'Erika', start:'17/07/2023', end:'24/07/2023'});
feriasBase.push({nome:'Erika', start:'30/01/2023', end:'12/02/2023'});
feriasBase.push({nome:'Erika', start:'24/10/2022', end:'08/11/2022'});
feriasBase.push({nome:'Erika', start:'18/07/2022', end:'27/07/2022'});
feriasBase.push({nome:'Erika', start:'03/01/2022', end:'16/01/2022'});

feriasBase.push({nome:'Fabio', start:'22/02/2023', end:'13/03/2023'});

feriasBase.push({nome:'Felipe Bastos', start:'12/06/2023', end:'25/06/2023'});
feriasBase.push({nome:'Felipe Bastos', start:'24/04/2023', end:'29/04/2023'});
feriasBase.push({nome:'Felipe Bastos', start:'22/02/2023', end:'03/03/2023'});

feriasBase.push({nome:'Fernando Conde', start:'05/02/2024', end:'10/02/2024'});
feriasBase.push({nome:'Fernando Conde', start:'11/12/2023', end:'24/12/2023'});
feriasBase.push({nome:'Fernando Conde', start:'13/10/2023', end:'13/10/2023', observacao: 'Banco de Horas'}); 
feriasBase.push({nome:'Fernando Conde', start:'02/10/2023', end:'11/10/2023'}); 
feriasBase.push({nome:'Fernando Conde', start:'26/12/2022', end:'14/01/2023'});
feriasBase.push({nome:'Fernando Conde', start:'22/02/2022', end:'03/03/2022' });
feriasBase.push({nome:'Fernando Conde', start:'21/01/2022', end:'21/01/2022', observacao: 'BH'});
feriasBase.push({nome:'Fernando Conde', start:'10/01/2022', end:'19/01/2022' });

feriasBase.push({nome:'Fernando P', start:'13/04/2023', end:'21/04/2023'});

feriasBase.push({nome:'Greg', start:'02/01/2024', end:'15/01/2024', observacao: 'Submarino Titanic'});
feriasBase.push({nome:'Greg', start:'02/10/2023', end:'07/10/2023'});
feriasBase.push({nome:'Greg', start:'03/07/2023', end:'12/07/2023'});
feriasBase.push({nome:'Greg', start:'02/01/2023', end:'16/01/2023'});
feriasBase.push({nome:'Greg', start:'03/10/2022', end:'17/10/2022'});
feriasBase.push({nome:'Greg', start:'02/03/2022', end:'11/03/2022', observacao: 'Férias BlueOrigin'});
feriasBase.push({nome:'Greg', start:'17/01/2022', end:'05/02/2022', observacao: 'Férias SpaceX'});

feriasBase.push({nome:'Gustavo', start:'02/01/2024', end:'21/01/2024'});

feriasBase.push({nome:'Henrique Coppola', start:'20/04/2023', end:'27/04/2023', observacao:'é de livre e espontânea vontade que você aceita ...'});
feriasBase.push({nome:'Henrique Coppola', start:'10/04/2023', end:'15/04/2023'});
feriasBase.push({nome:'Henrique Coppola', start:'07/11/2022', end:'20/11/2022'});

feriasBase.push({nome:'Higor', start:'11/09/2023', end:'16/09/2023'});
feriasBase.push({nome:'Higor', start:'17/10/2023', end:'30/10/2023'});

feriasBase.push({nome:'Joao Vitor', start:'24/07/2023', end:'29/07/2023'});
feriasBase.push({nome:'Joao Vitor', start:'06/02/2023', end:'19/02/2023'});

feriasBase.push({nome:'Marcio H', start:'14/08/2023', end:'27/08/2023' });
feriasBase.push({nome:'Marcio H', start:'10/07/2023', end:'15/07/2023' });

feriasBase.push({nome:'Markonds', start:'24/07/2023', end:'31/07/2023'});
feriasBase.push({nome:'Markonds', start:'29/05/2023', end:'05/06/2023'});
feriasBase.push({nome:'Markonds', start:'16/01/2023', end:'29/01/2023'});

feriasBase.push({nome:'Navarro', start:'22/07/2024', end:'27/07/2024'});
feriasBase.push({nome:'Navarro', start:'08/04/2024', end:'21/04/2024'});
feriasBase.push({nome:'Navarro', start:'02/05/2023', end:'21/05/2023'});

feriasBase.push({nome:'Sirlane', start:'08/01/2024', end:'21/01/2024'});
feriasBase.push({nome:'Sirlane', start:'20/12/2023', end:'29/12/2023'});
feriasBase.push({nome:'Sirlane', start:'18/07/2023', end:'23/07/2023'});

feriasBase.push({nome:'Vanessa', start:'18/03/2024', end:'27/03/2024'});
feriasBase.push({nome:'Vanessa', start:'04/03/2024', end:'17/03/2024'});
feriasBase.push({nome:'Vanessa', start:'05/02/2024', end:'10/02/2024'});
feriasBase.push({nome:'Vanessa', start:'03/07/2023', end:'01/08/2023', observacao: 'Férias !!'});
feriasBase.push({nome:'Vanessa', start:'19/04/2023', end:'20/04/2023', observacao: 'Banco de Horas'});
feriasBase.push({nome:'Vanessa', start:'04/04/2023', end:'04/04/2023', observacao: 'Banco de Horas'});

feriasBase.push({nome:'Vinicius', start:'11/03/2024', end:'20/03/2024'});
feriasBase.push({nome:'Vinicius', start:'04/09/2023', end:'23/09/2023'});
feriasBase.push({nome:'Vinicius', start:'20/03/2023', end:'29/03/2023'});
feriasBase.push({nome:'Vinicius', start:'19/09/2022', end:'08/10/2022'});
feriasBase.push({nome:'Vinicius', start:'20/06/2022', end:'27/06/2022'});
feriasBase.push({nome:'Vinicius', start:'09/05/2022', end:'16/05/2022', observacao: 'Manda PIX'});
feriasBase.push({nome:'Vinicius', start:'14/03/2022', end:'27/03/2022', observacao: 'Carnaval fora de época'});

feriasBase.push({nome:'Waldemir', start:'20/03/2023', end:'29/03/2023' });
feriasBase.push({nome:'Waldemir', start:'30/01/2023', end:'18/02/2023' });


