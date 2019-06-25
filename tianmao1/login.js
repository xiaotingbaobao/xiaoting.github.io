var btn=document.getElementById('btn');
var dlName=document.getElementById('denglu_name');
var dlPassword=document.getElementById('denglu_password');
var tsText=document.getElementById('tishi_p');
var dlTishi=document.getElementById('denglu_tishi');
btn.onclick=function(event){
	
	
	
	
	if(!dlName.value==''  && !dlPassword.value==''){
		dlTishi.style.display='none';
		window.location.href="index.html"
		return false;
	}else{
		dlTishi.style.display='block';
		
		if(dlName.value=='' && !dlPassword.value==''){
			tsText.innerHTML='请输入用户名';
		}else if(dlPassword.value=='' && !dlName.value==''){
			tsText.innerHTML='请输入密码';
		}else if(dlName.value==''  && dlPassword.value==''){
			tsText.innerHTML='请输入用户名和密码';
		}
		event.preventDefault();
		return false;
	}
}
