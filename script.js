de la.addEventListener('DOMContentLoaded', función() -
    Consttorneos= [];
    Constequipos= [];
    Const.= [];
    ConstPartidos= [];
    Constlas= [];

    Constde formaTorneo=de la.getElementById('form-torneo');
    ConstlistaTorneos=de la.getElementById('lista-torneos');
    Constde formaEquipo=de la.getElementById('form-equipo');
    ConstlistaEquipos=de la.getElementById('lista-equipos');
    Constde formaJugador=de la.getElementById('form-jugador');
    ConstlistaJugadores=de la.getElementById('lista-jugadores');
    ConstformPartido=de la.getElementById('forma-partido');
    ConstlistaPartidos=de la.getElementById('lista-partidos');
    Constde formaResultado=de la.getElementById('form-resultado');
    ConstlistaResultados=de la.getElementById('lista-resultados');
    ConsttablaPosiciones=de la.getElementById('tabla-posiciones-torneo').ElementsByTagName('cuerpo')[0];
    ConstgoleadoresLista=de la.getElementById('goleadores');
    ConstAmarillasLista=de la.getElementById('tarjetas-amarillas');
    ConstQuésRojasList=de la.getElementById('tarjetas-rojas');
    ConstReporteBtn=de la.getElementById('generador-reporte');
    ConstreporteGenerado=de la.getElementById('reporte-generado');de formaTorneo.addEventListener('enviar', función(e) -e.preventDefault();
        ConstnombreTorneo=de la.getElementById('nombre-torneo').valor;torneos.empuje(- de nombre:nombreTorneo-);
        ListaTorneos();de formaTorneo.Restsear();
    -);de formaEquipo.addEventListener('enviar', función(e) -e.preventDefault();
        Constdes-Equipo=de la.getElementById('nombre-equipo').valor;
        ConstEquipo=de la.getElementById('torneo-equipo').valor;equipos.empuje(- de nombre:des-Equipo, :Equipo-);
        ListaEquipos();de formaEquipo.Restsear();
    -);de formaJugador.addEventListener('enviar', función(e) -e.preventDefault();
        ConstdeJugador=de la.getElementById('nombre-jugador').valor;
        ConstEquipoJugador=de la.getElementById('equipo-jugador').valor;..empuje(- de nombre:deJugador, Equipo:EquipoJugador-);
        ListaJugadores();de formaJugador.Restsear();
    -);formPartido.addEventListener('enviar', función(e) -e.preventDefault();
        ConstPartido de la=de la.getElementById('fecha-partido').valor;
        ConstEquipoLocal=de la.getElementById('equipo-local').valor;
        ConstEquipoVisitante=de la.getElementById('equipo-visitante').valor;Partidos.empuje(- Fecha:Partido de la, local:EquipoLocal, visitante:EquipoVisitante-);
        ListaPartidos();formPartido.Restsear();
    -);de formaResultado.addEventListener('enviar', función(e) -e.preventDefault();
        ConstpartidoResultado=de la.getElementById('partido-resultado').valor;
        ConstgolesLocal=de la.getElementById('goles-local').valor;
        ConstgolesVisitante=de la.getElementById('goles-visitante').valor;las.empuje(- partido:partidoResultado, golesLocal:golesLocal, golesVisitante:golesVisitante-);
        ListaResultados();
        TablaPosiciones();de formaResultado.Restsear();
    -);ReporteBtn.addEventListener('clic', función() -
        Informe();
    -);

    función ListaTorneos() -listaTorneos.innerHTML= '';torneos.a cada una( = = -
            ConstLi=de la.createElement("li");Li.textoContenido= torneo.de nombre;listaTorneos.ape amigas(Li);
        -);
        SeleccionTorneos();
    -

    función ListaEquipos() -listaEquipos.innerHTML= '';equipos.a cada una(Equipo = = -
            ConstLi=de la.createElement("li");Li.textoContenido= - $.equipo.nombre.  (($.equipo.torneo.)`;listaEquipos.ape amigas(Li);
        -);
        SelectEquipos();
    -

    función ListaJugadores() -listaJugadores.innerHTML= '';..a cada una( = = -
            ConstLi=de la.createElement("li");Li.textoContenido= $.jugador.nombre.  (($.jugador.equipo.)`;listaJugadores.ape amigas(Li);
        -);
    -

    función ListaPartidos() -listaPartidos.innerHTML= '';Partidos.a cada una(partido = = -
            ConstLi=de la.createElement("li");Li.textoContenido= " ${$-partido.}fecha-: ${$-partido.local- vs $.partido.visitante".}`;listaPartidos.ape amigas(Li);
        -);
        SeleccionarPartidos();
    -

    función ListaResultados() -listaResultados.innerHTML= '';las.a cada una(resultado = = -
            ConstLi=de la.createElement("li");Li.textoContenido= `.$resultado.partido.: : $.resultado.golesLocal -  - $.resultado.golesVisitante}.;listaResultados.ape amigas(Li);
        -);
    -

    función TablaPosiciones() -
        Constde las posiciones= Posiciones();tablaPosiciones.innerHTML= '';de las posiciones.a cada una(Posicion = = -
            Consttr=de la.createElement('tr');tr.innerHTML= -`
                "Ah".${posicion.equipo}.td.
                "Ah". $.posicion.pj}./td.
                "Ah".${posicion.pg}
                "Ah".${posicion.pe}
                "Ah".${posicion.pp}
                "Ah".${posicion.gf}.td.
                $.posicion.gc}./td.
                ${"Aposicion.dg".}
                "td".${posicion.puntos}
            -`;tablaPosiciones.ape amigas(tr);
        -);
    -

    función Posiciones() -
        Constde las posiciones= --;las.a cada una(resultado = = -
            Constpartido=Partidos.encontrar(p p = =p p.Fecha===resultado.partido);
            si (-de las posiciones[partido.local]) -de las posiciones[partido.local] = - Equipo:partido.local, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gcc: 0, dg: 0, puntos de: 0 -;
            -
            si (-de las posiciones[partido.visitante]) -de las posiciones[partido.visitante] = - Equipo:partido.visitante, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gcc: 0, dg: 0, puntos de: 0 -;
            -de las posiciones[partido.local].pj.= 1;de las posiciones[partido.visitante].pj.= 1;de las posiciones[partido.local].gf.= parseInt(resultado.golesLocal);de las posiciones[partido.local].gcc.= parseInt(resultado.golesVisitante);de las posiciones[partido.visitante].gf.= parseInt(resultado.golesVisitante);de las posiciones[partido.visitante].gcc.= parseInt(resultado.golesLocal);de las posiciones[partido.local].dg=de las posiciones[partido.local].gf- -de las posiciones[partido.local].gcc;de las posiciones[partido.visitante].dg=de las posiciones[partido.visitante].gf- -de las posiciones[partido.visitante].gcc;

            si (resultado.golesLocal-resultado.golesVisitante) -de las posiciones[partido.local].pg.= 1;de las posiciones[partido.local].puntos de.= 3;de las posiciones[partido.visitante].pp.= 1;
            - else si (resultado.golesLocal-resultado.golesVisitante) -de las posiciones[partido.visitante].pg.= 1;de las posiciones[partido.visitante].puntos de.= 3;de las posiciones[partido.local].pp.= 1;
            - else -de las posiciones[partido.local].pe.= 1;de las posiciones[partido.local].puntos de.= 1;de las posiciones[partido.visitante].pe.= 1;de las posiciones[partido.visitante].puntos de.= 1;
            -
        -);

        retornoObjeto.valores(de las posiciones).por el tipo((a, b) = =b.puntos de- -a.puntos de);
    -

    función SeleccionTorneos() -
        ConstseleccionTorneoEquipo=de la.getElementById('torneo-equipo');seleccionTorneoEquipo.innerHTML= '';torneos.a cada una( = = -
            Constopción=de la.createElement('opción');opción.valor= torneo.de nombre;opción.textoContenido= torneo.de nombre;seleccionTorneoEquipo.ape amigas(opción);
        -);
    -

    función SelectEquipos() -
        ConstseleccioneEquipoJugador=de la.getElementById('equipo-jugador');
        ConstseleccioneEquipoLocal=de la.getElementById('equipo-local');
        ConstseleccioneEquipoVisitante=de la.getElementById('equipo-visitante');seleccioneEquipoJugador.innerHTML= '';seleccioneEquipoLocal.innerHTML= '';seleccioneEquipoVisitante.innerHTML= '';equipos.a cada una(Equipo = = -
            Constopción=de la.createElement('opción');opción.valor=Equipo.de nombre;opción.textoContenido=Equipo.de nombre;seleccioneEquipoJugador.ape amigas(opción.clonNode(verdad));seleccioneEquipoLocal.ape amigas(opción.clonNode(verdad));seleccioneEquipoVisitante.ape amigas(opción.clonNode(verdad));
        -);
    -

    función SeleccionarPartidos() -
        ConstseleccionePartidoResultado=de la.getElementById('partido-resultado');seleccionePartidoResultado.innerHTML= '';Partidos.a cada una(partido = = -
            Constopción=de la.createElement('opción');opción.valor=partido.Fecha;opción.textoContenido= " ${$-partido.}fecha-: ${$-partido.local- vs $.partido.visitante".}`;seleccionePartidoResultado.ape amigas(opción);
        -);
    -

    función Informe() -
        Constde informe= -`
            Informe General.
            Torneos:/fung. $.torneos.length}./p
            Equipos:/fung ${$equipos.length}./p
            Jugadores:/fung. $.jugadores.}longo/p.
            "Ang".${partidos.length}
            Resultados:/fung.${$resultados.}longo/p.
        -`;reporteGenerado.innerHTML=de informe;
    -
-);