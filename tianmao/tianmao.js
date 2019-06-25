//下滑出现导航栏
	var sidebarSDiv=document.getElementsByClassName('sidebar_s')[0];
	var sidebarZDiv=document.getElementsByClassName('sidebar_z')[0];
	var searchLeft=document.getElementById('search');
	var leftSearch = searchLeft.offsetLeft
	sidebarZDiv.style.left=leftSearch-40+'px';
	window.onscroll = function(){
		
		var Top=document.documentElement.scrollTop||document.body.scrollTop;
		var topHeight=700;
		var newTop=parseInt(Top);
		if(newTop>topHeight){
			if(sidebarSDiv.offsetHeight===0){
				sidebarSDiv.style.display='block';
				startMove(sidebarSDiv,50)
			}else if(sidebarSDiv.offsetHeight===50){
				sidebarSDiv.style.height='50px';
			}
		}else{
			if(sidebarSDiv.offsetHeight===50){
				sidebarSDiv.style.display='block';
				startMove(sidebarSDiv,0)
			}
		}
		
		if(newTop>topHeight){
			if(sidebarZDiv.offsetHeight===0){
				sidebarZDiv.style.display='block';
				startMove(sidebarZDiv,390)
			}else if(sidebarZDiv.offsetHeight===390){
				sidebarZDiv.style.height='390px';
			}
		}else{
			if(sidebarZDiv.offsetHeight===390){
				sidebarZDiv.style.display='block';
				startMove(sidebarZDiv,0)
			}else{
				sidebarZDiv.style.display='none';
			}
		}
		
		
	}
//运动封装
	function startMove(obj,iTarget){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var speed=(iTarget-obj.offsetHeight)/3;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(iTarget==obj.offsetHeight){
				clearInterval(obj.timer);
			}else{
				obj.style.height=obj.offsetHeight+speed+'px';
			}
		},30);
	}
	

//商品分类移动上去显示详情
	var subnavLi=document.getElementById("subnav").getElementsByTagName("li");
	var subnavCon=document.getElementsByClassName('subnav_content1');
	var subnavA=document.getElementById("subnav").getElementsByTagName('a');
	var cc="";
	for(var i=0;i<subnavLi.length;i++){
			subnavLi[i].onmouseover=function(){
				this.style.backgroundColor='#ffffff';
				this.getElementsByTagName('a')[0].style.color = "red";
				this.getElementsByTagName('svg')[0].style.color = "red";
				
				for(var j=0;j<subnavCon.length;j++){
				subnavLi[j].index=j;
				subnavCon[j].style.display="none";
				}
				subnavCon[this.index].style.display="block";
				
				cc=this.index;
				subnavCon[cc].onmouseover=function(){
					dd=cc;
					subnavLi[dd].style.backgroundColor='#ffffff';
					subnavLi[dd].getElementsByTagName('a')[0].style.color = "red";
					subnavLi[dd].getElementsByTagName('svg')[0].style.color = "red";
					subnavCon[dd].style.display="block"; 
				}
				subnavCon[cc].onmouseout=function(){
					dd=cc;
					subnavLi[dd].style.backgroundColor='';
					subnavLi[dd].getElementsByTagName('a')[0].style.color = "";
					subnavLi[dd].getElementsByTagName('svg')[0].style.color = "";
					subnavCon[dd].style.display="none"; 
				}
			}
			
			subnavLi[i].onmouseout=function(){
				this.style.backgroundColor='';
				this.getElementsByTagName('a')[0].style.color = "";
				this.getElementsByTagName('svg')[0].style.color = "";
				
				subnavCon[cc].style.display="none"; 
				
			}
	}
	
	
//轮播图

	var subControl=document.getElementById('subnav_control');
	var subContLi=subControl.getElementsByTagName('li');
	var bannerBac=document.getElementById('banner')
	var banLun=document.getElementById('banner_z_lunbo');
	var LunLi=banLun.getElementsByTagName('li');
	var LunLiImg=document.getElementsByClassName('lunli_img');
	
	var banY=document.getElementById('banner_y');
	
	var banyS=document.getElementById('banner_ys');
	var banyX=document.getElementById('banner_yx');
	var now=0;
	var nowZindex=1;
		for(var i=0;i<LunLiImg.length;i++){
			LunLiImg[i].alpha=0;
		}
	for(var i=0;i<subContLi.length;i++){
		
		subContLi[i].index=i;
		subContLi[i].onclick=function(){
			
			now=this.index;
			lunbo();
			for(var j=0;j<LunLiImg.length;j++){
				startMove2(LunLiImg[j],'opacity',0);
			}
			startMove2(LunLiImg[now],'opacity',100);
		}
	}
	function lunbo(){
		for(var i=0;i<LunLi.length;i++){
			LunLi[i].style.zIndex='';
		}	
		LunLi[now].style.zIndex=nowZindex++;
		
		
		startMove2(LunLiImg[0],'opacity',0);
		startMove2(LunLiImg[now],'opacity',100);
		
		for(var i=0;i<subContLi.length;i++)
			{
				subContLi[i].className='';
			}
		subContLi[now].className='subactive';
		
		if(now==0){
			bannerBac.style.backgroundColor="#0095E2";
			banyS.setAttribute("src","img/bany11.webp")
			banyX.setAttribute("src","img/bany12.webp")
			banY.style.display='block';
			
		}else if(now==1){
			bannerBac.style.backgroundColor="#c60e01";
			banyS.setAttribute("src","img/bany21.webp")
			banyX.setAttribute("src","img/bany22.webp")
			banY.style.display='block';
		}else if(now==2){
			bannerBac.style.backgroundColor="#420179";
			banyS.setAttribute("src","img/bany31.webp")
			banyX.setAttribute("src","img/bany32.webp")
			banY.style.display='block';
		}else if(now==3){
			bannerBac.style.backgroundColor="#AD4806";
			banyS.setAttribute("src","img/bany41.webp")
			banyX.setAttribute("src","img/bany42.webp")
			banY.style.display='block';
		}else if(now==4){
			bannerBac.style.backgroundColor="#FF8F77";
			banyS.setAttribute("src","img/bany51.webp")
			banyX.setAttribute("src","img/bany52.webp")
			banY.style.display='block';
		}else if(now==5){
			bannerBac.style.backgroundColor="#E1E1E1";
			banY.style.display='none';
		}
	}
	
	function setTimer(){
		startMove2(LunLiImg[now],'opacity',0);
		now++;
		if(now==LunLi.length)
		{
			now=0;
		}
		lunbo();
	}
	
	var timer=setInterval(setTimer,4000);
	
	bannerBac.onmouseover=function(){
		clearInterval(timer);
	}
	bannerBac.onmouseout=function(){
		timer=setInterval(setTimer,4000);
	}
	
	//封装效果
	function getStyle(obj, name)
	{
		if(obj.currentStyle)
		{
			return obj.currentStyle[name];
		}
		else
		{
			return getComputedStyle(obj, false)[name];
		}
	}
	
	function startMove2(obj, attr, iTarget)
	{
		clearInterval(obj.timer);
		obj.timer=setInterval(function (){
			if(attr=='opacity')
			{
				cur=Math.round(parseFloat(getStyle(obj, attr))*100);
			}
			else
			{
				cur=parseInt(getStyle(obj, attr));
			}
			var speed=(iTarget-cur)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(cur==iTarget)
			{
				clearInterval(obj.timer);
			}
			else
			{
				if(attr=='opacity')
				{
					
					obj.style.filter='alpha(opcity:'+(cur+speed)+')';
					obj.style.opacity=(cur+speed)/100;
				}
				else
				{
					obj.style[attr]=cur+speed+'px';
				}
			}
		}, 30);
	}