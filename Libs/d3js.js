
onload = () => {

    //practice run
    /* d3
        .selectAll('div')
        .style('background-color', 'lightblue')
        .append('p').html('exemplo');*/

    /*d3
        .select('#highlight')
        .style('font-size', 'large')
        .style('font-weight', 'bold'); */

    let divs = d3
        .select('#graph')
        .selectAll('div')
        .data([17, 35, 78, 40, 50, 39]);

    divs
        .sort()
        .text((d) => d)
        .style('width', (d) => d * 10 + 'px');

    divs
        .enter()
        .append('div')
        .text((d) => d)
        .style('width', (d) => d * 10 + 'px');

    /* divs
        .exit()
        .remove();*/


    document.querySelectorAll('div').forEach(
        (d) => console.log(d.__data__)
    );

    console.log(divs)




    //SVG

    let dados = [
        { chave: 'Frango', valor: 156 },
        { chave: 'Carne', valor: 27 },
        { chave: 'Vegetariano', valor: 120 },
        { chave: 'Queijo', valor: 115 },
        { chave: 'Goiabada', valor: 44 },
        { chave: 'Banana', valor: 260 },
        { chave: 'Camarão', valor: 133 }
    ];

    let svg = d3.select('#grafico');
    let largura = parseInt(svg.style('width'));
    let altura = parseInt(svg.style('height'));
    let tituloY = 'Quantidade diária';
    let tituloX = 'Tipos de pastéis';

    let margem = {
        esquerda: 70,
        direita: 20,
        superior: 40,
        inferior: 100
    };

    let larguraPlotagem = largura - margem.esquerda - margem.direita;
    let alturaPlotagem = altura - margem.superior - margem.inferior;

    let plotagem = svg.append('g')
        .attr('width', larguraPlotagem)
        .attr('height', alturaPlotagem)
        .attr('transform', ' translate(' + margem.esquerda + ', ' + margem.superior + ')');

    let fnX = d3.scaleBand()
        .domain(dados.map(d => d.chave))
        .range([0, larguraPlotagem])
        .padding(0.1);

    let fnY = d3.scaleLinear()
        .domain([0, d3.max(dados.map(d => d.valor))])
        .range([alturaPlotagem, 0]);

    let fnCores = d3.scaleLinear()
        .domain([0, d3.max(dados.map(d => d.valor))])
        .range(d3.schemeSet1);

    let grade = d3.axisRight(fnY)
        .tickSize(larguraPlotagem)
        .tickFormat('');

    plotagem.append('g')
        .attr('id', 'grade')
        .call(grade);

    svg.append('text')
        .attr('x', margem.esquerda)
        .attr('y', margem.superior + alturaPlotagem)
        .style('text-anchor', 'middle')
        .attr('transform', 'translate(' + larguraPlotagem / 2 + ', 80)')
        .text(tituloX);

    svg.append('text')
        .attr('x', 0)
        .attr('y', 0)
        .style('text-anchor', 'middle')
        .attr('transform', 'translate(25, ' + (margem.superior + alturaPlotagem / 2) + ') rotate(-90)')
        .text(tituloY);

    let eixoX = d3.axisBottom(fnX);
    plotagem
        .append('g')
        .attr('id', 'eixoX')
        .attr('transform', 'translate(0, ' + alturaPlotagem + ')')
        .call(eixoX);

    let eixoY = d3.axisLeft(fnY);
    plotagem
        .append('g')
        .attr('id', 'eixoY')
        .call(eixoY);

    plotagem.selectAll('.barra')
        .data(dados)
        .enter()
        .append('rect')
        .classed('barra', true)
        .attr('x', (d) => fnX(d.chave))
        .attr('y', (d) => fnY(d.valor))
        .attr('width', fnX.bandwidth())
        .attr('height', (d) => alturaPlotagem - fnY(d.valor))
        .attr('fill', (d, i) => fnCores(d.valor));

    plotagem.selectAll('.rotulo')
        .data(dados)
        .enter()
        .append('text')
        .classed('rotulo', true)
        .text((d) => d.valor)
        .attr('x', (d) => fnX(d.chave))
        .attr('dx', fnX.bandwidth() * 0.5)
        .attr('y', (d) => fnY(d.valor))
        .attr('dy', -5);


};