import { LIST_GET } from '../Api';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getList: async () => {
    const { url, options } = LIST_GET();
    const response = await fetch(url, options);
    const json = await response.json();
    let fundacao = json.filter((f) => f.solucoes.includes('Fundação'));
    let estruturasdeparedes = json.filter((f) =>
      f.solucoes.includes('Estruturas de Paredes'),
    );
    let contraventamentodeparedes = json.filter((f) =>
      f.solucoes.includes('Contraventamento de Paredes'),
    );
    let membranasevedacoes = json.filter((f) =>
      f.solucoes.includes('Membranas e vedações'),
    );
    let lajesecoberturas = json.filter((f) =>
      f.solucoes.includes('Lajes e coberturas'),
    );
    let isolamentotermoacustico = json.filter((f) =>
      f.solucoes.includes('Isolamento termoacustico'),
    );
    let impermeabilizacoes = json.filter((f) =>
      f.solucoes.includes('Impermeabilizações'),
    );
    let esquadrias = json.filter((f) => f.solucoes.includes('Esquadrias'));
    let revestimentoexterno = json.filter((f) =>
      f.solucoes.includes('Revestimento externo'),
    );
    let revestimentointerno = json.filter((f) =>
      f.solucoes.includes('Revestimento Interno'),
    );
    let instalacoeshidraulicaseeletricas = json.filter((f) =>
      f.solucoes.includes('Instalações Hidraulicas e Elétricas'),
    );
    let acabamentoshidraulicoseeletricos = json.filter((f) =>
      f.solucoes.includes('Acabamentos Hidraulicos e Elétricos'),
    );
    return [
      {
        slug: 'fundacao',
        title: 'Fundação',
        items: fundacao,
      },
      {
        slug: 'estruturasdeparedes',
        title: 'Estruturas de Paredes',
        items: estruturasdeparedes,
      },
      {
        slug: 'contraventamentodeparedes',
        title: 'Contraventamento de Paredes',
        items: contraventamentodeparedes,
      },
      {
        slug: 'membranasevedacoes',
        title: 'Membranas e vedações',
        items: membranasevedacoes,
      },
      {
        slug: 'lajesecoberturas',
        title: 'Lajes e coberturas ',
        items: lajesecoberturas,
      },
      {
        slug: 'isolamentotermoacustico',
        title: 'Isolamento termoacustico',
        items: isolamentotermoacustico,
      },
      {
        slug: 'impermeabilizacoes',
        title: 'Impermeabilizações',
        items: impermeabilizacoes,
      },
      {
        slug: 'esquadrias',
        title: 'Esquadrias',
        items: esquadrias,
      },
      {
        slug: 'revestimentoexterno',
        title: 'Revestimento externo',
        items: revestimentoexterno,
      },
      {
        slug: 'revestimentointerno',
        title: 'Revestimento Interno',
        items: revestimentointerno,
      },
      {
        slug: 'instalacoeshidraulicaseeletricas',
        title: 'Instalações Hidraulicas e Elétricas',
        items: instalacoeshidraulicaseeletricas,
      },
      {
        slug: 'acabamentoshidraulicoseeletricos',
        title: 'Acabamentos Hidraulicos e Elétricos',
        items: acabamentoshidraulicoseeletricos,
      },
    ];
  },
};
