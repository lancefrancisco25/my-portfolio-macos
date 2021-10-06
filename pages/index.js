import {useRef, useState} from 'react'
import Image from 'next/image'
import Head from '../components/Head'

import wallpaper from '../public/dk-wall.jpg'

import css from '../styles/Home.module.css'

import Taskbarup from '../components/taskbarup'
import Appdrawer from '../components/appdrawer'
import Aboutme from '../components/aboutme/aboutme'
import Question from '../components/questions/questions'
import Preloader from '../components/preloader/preloader'


function Index() {
  const document = useRef(null)

  const [open, setOpen] = useState([false, false, false]);
  const [mini, setMini] = useState([false, false, false]);
  const [miniPos, setMiniPos] = useState({0: [false], 1: [false], 2: [false]});
  const [theme, setTheme] = useState("dark");

  function onMinimise(props, pos){
    var el = refarray[pos].current;
    var newPos = {...miniPos}
    newPos[pos] = [el.offsetTop, el.offsetLeft]
    setMiniPos(newPos)
    console.log(miniPos)
    props.current.style.transition = '0.3s'
    props.current.style.transform = `scale(1.2) translate(-50%, -50%)`;
    setTimeout(()=>{
      props.current.style.transform = `scale(0) translate(-50%, -50%)`;
      props.current.style.top = `93%`;
      props.current.style.left = `50%`;
      var newArr = [...mini]
      newArr[pos] = true
      setMini(newArr)
    }, 200)
  }
  
  function onOpen(props, pos, disp){
    props.current.style.transform = `scale(0) translate(-50%, -50%)`;
    props.current.style.display = (disp) ? disp : 'block';
    setTimeout(()=>{
      props.current.style.transition = '0.3s';
      props.current.style.opacity = 1;
      console.log(miniPos[pos])
      props.current.style.top = (!miniPos[pos][0]) ? `45%` : miniPos[pos][0] + 'px';
      props.current.style.left = (!miniPos[pos][0]) ? `50%` : miniPos[pos][1] + 'px';
      props.current.style.transform = `scale(1) translate(-50%, -50%)`;
    }, 200)
  }

  function onClose(props, pos){
    props.current.style.transition = '0.3s'
    var newPos = {...miniPos}
    newPos[pos] = [false]
    setMiniPos(newPos)
    setTimeout(()=>{
      props.current.style.transform = `scale(0.5) translate(-50%, -50%)`;
      props.current.style.opacity = `0`;
      setTimeout(()=>{
        props.current.style.display = 'none';
        var newArr = [...open]
        console.log(miniPos[pos])
        newArr[pos] = !newArr[pos]
        setOpen(newArr)
      }, 300)
    }, 200)
  }

  function zIndex(pos){
    for(let i = 0; i < refarray.length; i++){
      if(i == pos){
          refarray[pos].current.style.zIndex = 10
      }else{
          refarray[i].current.style.zIndex = 5
      }
  }
  }

  //setOpenState
  const [varState, setStateOpen] = useState([0, 0])
  //ref
  const question = useRef(null)
  const aboutMe = useRef(null)
  var refarray = [aboutMe, question]

  //windowDrag function
  //var onDown = [false, undefined, undefined,undefined];
  var onDown = {
    click: false,
    firstElementPos: null,
    pageX: null,
    pageY: null,
    elementPos: null
  }
  function mousemove(e, l){
    var element = refarray[l].current
    onDown.click = true;
    onDown.firstElementPos = [element.offsetTop, element.offsetLeft];
    onDown.pageX = e.pageX;
    onDown.pageY = e.pageY;
    onDown.elementPos = l;
    element.style.transition = 'none'
  }
  function mouseup(dd){
    onDown.click = false;
    //console.log(onDown)
  }
  function onMouseMoveDrag(e){
    if(onDown.click){
      var element = refarray[onDown.elementPos].current, leftForm = onDown.firstElementPos[1]  + (e.pageX - onDown.pageX), topForm = onDown.firstElementPos[0] + (e.pageY - onDown.pageY);
      var truewidth = leftForm - (element.offsetWidth / 2 );
      var trueheight = topForm - (element.offsetHeight / 2 );
      console.log(trueheight);
      if(truewidth <= 0){
        element.style.left = element.offsetWidth / 2  + 'px';
        onDown.firstElementPos[1] = element.offsetLeft;
        onDown.pageX = e.pageX
      }else if(truewidth > document.current.offsetWidth - element.offsetWidth ){
        element.style.left = document.current.offsetWidth - element.offsetWidth / 2  + 'px';
        onDown.firstElementPos[1] = element.offsetLeft;
        onDown.pageX = e.pageX
      }else{
        element.style.left = leftForm + 'px';
      }

      if(trueheight <= 0){
        element.style.top = element.offsetHeight / 2  + 'px';
        onDown.firstElementPos[0] = element.offsetTop;
        onDown.pageY = e.pageY
      }else if(trueheight > document.current.offsetHeight - element.offsetHeight ){
        element.style.top = document.current.offsetHeight - element.offsetHeight / 2  + 'px';
        onDown.firstElementPos[0] = element.offsetTop;
        onDown.pageY = e.pageY
      }else{
        element.style.top = topForm + 'px';
      }
    }
  }

  return (
    <div className={theme} onMouseMove={onMouseMoveDrag} onMouseUp={mouseup} ref={document} style={{width: '100vw', height: '100vh', position: 'relative'}}>
      <Head/>
      <Preloader />

      <Taskbarup className={`${css.headerCont} `}/>

    <div className={css.appCont} onMouseDown={()=> zIndex(1)} ref={question} style={{display: 'none'}}>
      <Question onMouseDown={(e) => mousemove(e, 1)} setStateOpen={setStateOpen} varState={varState} opened={open} onMinimise={onMinimise} onClose={onClose} refy={question}/>
    </div>

    <div className={css.appCont}  onMouseDown={(e) => {mousemove(e, 0),  zIndex(0)}} onMouseUp={() => {mouseup}} ref={aboutMe} style={{display: 'none'}}>
      <Aboutme onMinimise={onMinimise} onClose={onClose}  refy={aboutMe}/>
    </div>

      <div className={css.Appdrawer}>
        <Appdrawer zIndex={zIndex} onMinimise={onMinimise} varState={varState} setStateOpen={setStateOpen} opened={open} setMini={setMini} mini={mini} refarray={refarray} onOpen={onOpen} setOpen={setOpen}/>
      </div>

      <div className={css.background}>
        <div className={css.relativebg}>
          <Image draggable="false" src={wallpaper} objectFit="cover" layout="fill" quality="100" alt="macos background"/>
        </div>
      </div>
    </div>
  )
}

export default Index
