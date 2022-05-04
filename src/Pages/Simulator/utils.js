export function getTitle(globalType) {
  console.log(globalType);

  if (globalType === 'processor-manager')
    return "Gerência de Processador";
  else if (globalType === 'process-and-threads')
    return "Processor e Threads";
  else
    return 'Não foi encontrado';
}

export function getSubtype(type) {

  if (type === 'fifo')
    return "First In First Out";
  else if (type === 'filo')
    return "First In Last Out";
  else
    return 'Não foi encontrado';

}