import React from 'react';
import'./scss/c_all.scss';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

export default  function CommunityAllComponent(){
    const [state,setState]=React.useState({
        listData:[],
        test:{}
    });

    const [key,setKey] =React.useState({
        key:'COMMUNITY',
        list :[]
    });
      
    const setList=(value)=>{
        let arr=[];
        if(localStorage.getItem('COMMUNITY')!==null){
            arr=JSON.parse(localStorage.getItem('COMMUNITY'));
            arr=[value, ...arr]
            localStorage.setItem('COMMUNITY',JSON.stringify(arr));
            setKey({
                ...key,
                list:arr
            })
        }
        else{
            arr=[value]
            localStorage.setItem('COMMUNITY',JSON.stringify(arr));
            setKey({
                ...key,
                list:arr
            })
        }
    }
  
    const onClickList=(e, item)=>{
       
        let obj ={
            idx:item.idx,
            userId:item.userId,
            subject:item.subject,
            file1:item.file1,
            file2:item.file2,
            file3:item.file3,
            title:item.title,
            service:item.service,
            location:item.location,
            content:item.content,
            writeDate:item.writeDate,
        }
        console.log(obj);   
        setList(obj);
            

    }


    const {content,subject,title}=state;

    const [img,setImg]=React.useState({
        file:[],
        ImgUrl:[]
    })

    const {file,ImgUrl}=img;

    React.useEffect(()=>{
        const $slideContainer=$('.slide-container');
        const $slideWrap=$('.slide-wrap');
        const $slide=$('.slide');
        const $arrowBtnNext = $('.arrow-btn-next');
        const $arrowBtnPrev = $('.arrow-btn-prev');

        let cnt=0;
        let n =($slide.length)/2

      
    

        function mainSlide(){
            $slideWrap.stop().animate({left:`${-100*cnt}%`},400,function(){
                if(cnt===1){
                    $arrowBtnNext.hide();
                    $arrowBtnPrev.css('display', 'block');
                }
                if(cnt===0){
                    $arrowBtnPrev.hide();
                    $arrowBtnNext.css('display', 'block');

                }
                
            })
        }

        function nextCount(){
            cnt++;
            mainSlide();
        }
        function prevCount(){
            cnt--;
            mainSlide();
        }



        $arrowBtnNext.on({
            click(e){
                e.preventDefault();
                nextCount();
            }
        })

        $arrowBtnPrev.on({
            click(e){
                e.preventDefault();
                prevCount();
            }
        })

    },[])

    const getList=()=>{
        try {
            axios({
                url:'/JSP/listAction.jsp',
                method:'GET', 
                dataType:'json' 
            })
            .then((res)=>{
                setState({
                    ...state,
                    listData:res.data.result
                    
                });
                console.log(res);  
            })
            .catch((err)=>{
                console.log(err);  

            })
    
 
            
        } catch (err) {
            console.log(err);   

        }
    }
    React.useEffect(()=>{
        getList();
       
        
    },[])

    useEffect(()=>{
        console.log(state.listData)
    },[state.listData])
    
    



    
    return (
        <div id='c-all'>
            <div className="content">
                    <div className="input">
                        <img src="http://localhost:3000/images/community/content/icon-search.svg" alt="" /><input type="text" name='' id='' placeholder='키워드와 #태그 모두 검색할 수 있어요.' />
                    </div>
                    <div className="slide-box">
                        <div className='pp'>
                            <strong>지금 가장 뜨거운 숨고픽🔥</strong>
                            <span>  
                                <em>1</em>
                                <i>/</i>
                                <em>2</em>
                            </span>

                        </div>
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className="slide slide1">
                                        <a href="!#">
                                            <div className="slide-item">
                                                <h3>공지사항</h3>
                                                <p>숨고생활 가이드라인 🤝</p>
                                                <div className="p-wrap">
                                                    <p>Soomgo</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="slide">
                                        <Link to="./view">
                                            <div className="slide-item">
                                                <h3>고수찾아요</h3>
                                                <p>누수된 천장 석고 및 목대 교체 등 목공 고수 찾습니다</p>
                                                <div className="p-wrap">
                                                    <p className='feed-p1'>246</p>
                                                    <p className='feed-p2'>13</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="slide">
                                        <Link to="./view">
                                            <div className="slide-item">
                                                <h3>고수찾아요</h3>
                                                <p>누수된 천장 석고 및 목대 교체 등 목공 고수 찾습니다</p>
                                                <div className="p-wrap">
                                                    <p className='feed-p1'>246</p>
                                                    <p className='feed-p2'>13</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="slide">
                                        <a href="!#">
                                            <div className="slide-item">
                                                <h3>고수찾아요</h3>
                                                <p>누수된 천장 석고 및 목대 교체 등 목공 고수 찾습니다</p>
                                                <div className="p-wrap">
                                                    <p className='feed-p1'>246</p>
                                                    <p className='feed-p2'>13</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="slide">
                                        <a href="!#">
                                            <div className="slide-item">
                                                <h3>고수찾아요</h3>
                                                <p>누수된 천장 석고 및 목대 교체 등 목공 고수 찾습니다</p>
                                                <div className="p-wrap">
                                                    <p className='feed-p1'>246</p>
                                                    <p className='feed-p2'>13</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="slide">
                                        <a href="!#">
                                            <div className="slide-item">
                                                <h3>고수찾아요</h3>
                                                <p>누수된 천장 석고 및 목대 교체 등 목공 고수 찾습니다</p>
                                                <div className="p-wrap">
                                                    <p className='feed-p1'>246</p>
                                                    <p className='feed-p2'>13</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a href="!#" className='arrow-btn-next'><img src="http://localhost:3000/images/community/content/icon-arrow-right.svg" alt=""/></a>
                        <a href="!#" className='arrow-btn-prev'><img src="http://localhost:3000/images/community/content/icon-arrow-left.svg" alt=""/></a>
                    </div>
                    <div className="btn-wrap">
                        <button className='blind'><span>초기화</span></button>
                        <button className='service'><span>서비스<img src="http://localhost:3000/images/community/content/icon-arrow-down.svg" alt="" /></span></button>
                        <button className='location'><span>지역<img src="http://localhost:3000/images/community/content/icon-arrow-down.svg" alt="" /></span></button>
                        <button className='blind'><span>지역이름</span></button>
                    </div>
                    <ul className="feed-list">


                        {
                        state.listData!==undefined && state.listData!==null? 
                        state.listData.map((item)=>{
                            return(
                                <li className="feed" key={item.idx} onClick={(e)=>onClickList(e,item)}>
                                    <Link to={`./view/${item.idx}`}>
                                        <div className="wrap-wrap">
                                            <div className="text-wrap">
                                                <div className="feed-content">
                                                    <h4>{item.subject}</h4>
                                                    <h3>{item.title}</h3>
                                                    <p className='c'>{item.content}</p>
                                                    <p className='l'>{item.location}</p>
                                                </div>
                                            </div>
                                            <div className="img-wrap">
                                                <img src={item.file1} alt="" />
                                            </div>
                                        </div>
                                        <div className="feed-footer">
                                                <div className="span-wrap">
                                                    <span className='span1'>0</span>
                                                    <span className='span2'>2</span>
                                                </div>
                                                <span className='span3'>{item.writeDate}</span>
                                        </div>
                                    </Link>
                            </li>
                            )
                        }) : <h2>로딩중....</h2>
                        }
                    </ul>
            </div>
        </div>
    );
};

