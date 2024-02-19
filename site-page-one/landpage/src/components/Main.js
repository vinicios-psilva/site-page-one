import Link from "next/link";
import React from "react";
import styles from "../styles/styles.css"

const Main = () => {
    return (
        <div className="main">

            {/* Inicio Tratamento para ansiedada */}

            <div className="custom-border"></div>
            <section className="jumbotron m-4">
                <h1 className="text-center py-4">Tratamento para ansiedade</h1>
                <div className=" row p-4 d-flex align-items-center">
                    <div className="col-md-6 col-sm-8">
                        <p className="lead">
                            O tratamento para ansiedade e pânico acontece dividido em duas etapas.
                            Na primeira fase, ensinamos ao cliente como funciona o mecanismo neurobiológico da
                            ansiedade e preparamos ele com técnicas capazes de controlar as respostas desadaptativas
                            de ansiedade por meio do controle corporal. Na segunda fase do tratamento nós trabalhamos
                            com foco na transformação das convicções cognitivas negativas e convicções de catastrofização
                            da realidade.
                        </p>
                    </div>
                    <div className="col-md-6 col-sm-4 d-flex justify-content-center">
                        <img className=" img-fluid rounded img" src="https://static.wixstatic.com/media/73cf8d_7be904d6bf6448f5a17e20bd206e1ecc~mv2.jpg/v1/fill/w_435,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/73cf8d_7be904d6bf6448f5a17e20bd206e1ecc~mv2.jpg" 
                        alt="" />
                    </div>
                </div>
            </section>

            {/* Inicio Depoimentos */}

            <section className="jumbotron p-2 m-4 ">
                <h1 className="text-center py-4 ">Depoimentos</h1>
                <div className="row p-4 d-flex justify-content-start ">
                    <div className="col-md-3 col-sm-6 depoimento">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">KAWANE COUTO</h5>
                                <p>"O início da terapia pode ser estranho, mas com o tempo me senti mais à vontade.
                                    Iniciei para me entender melhor e, sinceramente, não foi tão agradável quanto eu esperava,
                                    mas faz parte do processo. Identificar e compreender meus sentimentos e emoções foi um desafio,
                                    mas a terapia me ajudou a entender meus limites, a não temer me posicionar e a superar a necessidade de agradar a todos."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 depoimento">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">IRLEY SANTOS</h5>
                                <p>
                                    "Por muito tempo a terapia foi um grande tabu para mim, eu sempre dizia que não precisava, porque na verdade eu achava que
                                    terapia era para gente doida, mas que na verdade é uma conexão de você com você. E o terapeuta Edmilson
                                    faz isso com tanta sutileza que você consegue se enxergar e detectar tudo aquilo que pode somar a mais na sua vida.
                                    Agora eu entendo que a terapia é um grande bem, então não fique presa ao medo, faça!"
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 depoimento">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">LARISSA BLACK</h5>
                                <p>"Quando iniciei a terapia, me senti insegura, mas sabia que precisava de ajuda. Escolher fazer a terapia foi amelhor
                                    decisão que tomei.Aprendi a lidar com questões que nunca entenderia sem ela. Edmilson me mostrou queposso lidar comigo mesma.
                                    Além disso, aprendi a lidar com questões familiares que me impediam de ser quem sou hoje.
                                    Este ano foi difícil, especialmente com o falecimento de minha mãe, mas a terapia me ajudou a suportar.
                                    Só tenho a agradecer!"
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6 depoimento">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">ISABELLE REITER</h5>
                                <p>"Nos primeiros dias de terapia, a mente armava armadilhas, tentando interromper o autocuidado.
                                    Parecia sem sentido abrir minha vida para alguém de fora. Mas aprendi a trazer coisas para o consciente
                                    e aplicar isso em outros aspectos. Sou grata pelo atendimento, pois pude refletir mais e dividir o que depende e não de mim.
                                    Obrigada, Edmilson, por todos os momentos de aprendizado e reflexão."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fim depoimento e Fim do Tratamento para ansiedada */}

            {/* Inicio Tratamento para insegurança */}

            <div className="custom-border"></div>
            <section className="jumbotron m-4 ">
                <h1 className="text-center py-4 ">Tratamento para insegurança</h1>
                <div className=" row p-4 d-flex align-items-center">
                    <div className="col-md-6 col-sm-4 d-flex justify-content-center ">
                        <img className=" img-fluid rounded img" src="https://static.wixstatic.com/media/73cf8d_954d25b10dbe49149fdf3ab1014de55d~mv2.png/v1/fill/w_391,h_500,al_c,q_85,enc_auto/73cf8d_954d25b10dbe49149fdf3ab1014de55d~mv2.png" 
                        alt="" />
                    </div>
                    <div className="col-md-6 col-sm-8">
                        <p className="lead">
                            O tratamento para insegurança busca resgatar a autoestima do
                            cliente e fortalece-lo novamente para vivenciar situações de exposição
                            como falar em público, expor seus sentimentos, se permitir conhecer novos
                            parceiros amorosos, tomar decisões importantes, não depender da aprovação alheia, etc.
                            Nesses casos usaremos técnicas de autorreparação, ressignificação de memórias e técnicas
                            cognitivas para mudança de convicções negativas sobre a realidade e sobre si mesmo.
                        </p>
                    </div>
                </div>
            </section>

            {/* Inicio Depoimentos */}

            <section className="jumbotron p-2">
                <h1 className="text-center py-4">Depoimentos</h1>
                <div className="row p-4 d-flex justify-content-start">
                    <div className="col-md-4 col-sm-6 depoimento">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">DAIANE VICENTE</h5>
                                <p>"Começar a terapia com Edmilson neste ano foi um presente para minha família.
                                    Todos estamos beneficiados. Na jornada rumo ao autoconhecimento, estou me libertando de
                                    amarras que atrapalhavam minhas decisões, controle emocional e ansiedade.
                                    Compreendi problemas passados e enfrento desafios diários com firmeza.
                                    Recomendo muito este excelente profissional."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 depoimento">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">LEONARDO CARLOS</h5>
                                <p>
                                    "Nessa jornada, aprendi que posso evoluir a cada dia e que meus próprios julgamentos,
                                    ego e emoções não enfrentadas são meus maiores obstáculos. Antes, o medo de abandonar
                                    hábitos me impediu de buscar terapia. Agora, com mais paciência, aprendo a lidar com
                                    ansiedade, durmo melhor e me sinto mais disposto. Isso renova minha fé e esperança."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 depoimento">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">JULYANA PEREIRA</h5>
                                <p>"Meu nome é Julyana, tenho 28 anos. Há 5 meses, tenho acompanhamento com Edmilson.
                                    Antes, acreditava na terapia, mas não buscava até sentir a necessidade real.
                                    Sentia-me estagnada, com momentos de pânico e inquietação.
                                    Agora, no processo de autoconhecimento, sou mais calma, capaz de analisar situações e
                                    lidar com a vida com leveza. A terapia mudou minha vida, me fazendo evoluir e lidar melhor
                                    com as adversidades."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fim depoimento e Fim do Tratamento para insegurança */}

            {/* Inicio Tratamento para depressão */}

            <section className="jumbotron custom-border">
                <h1 className="text-center py-4">Tratamento para depressão</h1>
                <div className=" row p-4 d-flex align-items-center">
                    <div className="col-md-6 col-sm-8">
                        <p className="lead">
                            O tratamento para depressão tem como principal objetivo tornar o cliente novamente
                            preparado para manter sua vida cotidiana (trabalho, relações familiares, vida social,
                            relacionamento amoroso e hobbys) por meio de técnicas de ativação comportamental e técnicas
                            cognitivas para mudança de convicções negativas sobre a realidade e sobre si mesmo.
                        </p>
                    </div>
                    <div className="col-md-6 col-sm-4 d-flex justify-content-center">
                        <img className=" img-fluid rounded img" src="https://static.wixstatic.com/media/73cf8d_7bedc6061e1d40a78e57d0b604d490b9~mv2.jpg/v1/fill/w_435,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/73cf8d_7bedc6061e1d40a78e57d0b604d490b9~mv2.jpg" 
                        alt="" />
                    </div>
                </div>
            </section>

            {/* Inicio Depoimentos */}

            <section className="jumbotron p-2">
                <h1 className="text-center py-4">Depoimentos</h1>
                <div className="row p-4 d-flex justify-content-start">
                    <div className="col-md-4 col-sm-6 depoimento">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">GABRIELE XAVIER</h5>
                                <p>"No início, minha timidez e o receio de ser rotulada me impediam de buscar terapia.
                                    Com o tempo, percebi que não se tratava apenas de cura, mas de ressignificar pensamentos e emoções.
                                    A terapia contribuiu significativamente para meu autoconhecimento e saúde mental, apesar de ser
                                    desconfortável às vezes. O cuidado de Edmilson em cada sessão foi fundamental para minha motivação."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 depoimento">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">JULIO CEZAR</h5>
                                <p>
                                    "Nessa jornada, aprendi que posso evoluir a cada dia e que meus próprios julgamentos,
                                    ego e emoções não enfrentadas são meus maiores obstáculos. Antes, o medo de abandonar
                                    hábitos me impediu de buscar terapia. Agora, com mais paciência, aprendo a lidar com
                                    ansiedade, durmo melhor e me sinto mais disposto. Isso renova minha fé e esperança."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 depoimento">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">MÁRCIA BIAZI</h5>
                                <p>"Topei compartilhar este depoimento porque acredito na importância do seu trabalho.
                                    Muitos subestimam a terapia, mas todos enfrentam problemas e nem sempre sabem como lidar com eles.
                                    Se as pessoas entendessem o valor da terapia, a visão sobre os psicólogos seria diferente.
                                    No início da terapia, estava inseguro, mas foi melhor do que eu esperava. É libertador, traz alívio e clareza.
                                    Não há julgamento, é um espaço para se entender. Agradeço por existirem psicólogos como você,
                                    dedicados a ajudar as pessoas. Obrigado, Edmilson, pelo carinho e compreensão."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fim depoimento e Fim do Tratamento para depressão */}

        </div>
    )
}

export default Main