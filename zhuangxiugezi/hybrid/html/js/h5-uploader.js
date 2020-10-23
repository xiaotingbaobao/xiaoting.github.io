let mask = document.querySelector(".mask");
let fileDom = document.querySelector(".file");
let tis = document.querySelector(".tis");
let progress = document.querySelector(".tis-progress");
let cancel = document.querySelector(".cancel-btn");


let createUpload = (file, url, key='file', header = {},data = {}) => {
	console.log(`
	上传地址:${url}\n
	请求头:${JSON.stringify(header)}\n
	参数:${JSON.stringify(data)}
	`);
	// console.log(file )
	// console.log(file.name)
	// console.log(file.tempFilePaths) 
	// console.log(url)
	// console.log(plus.io.convertLocalFileSystemURL(file))
	// // console.log(plus.io.convertLocalFileSystemURL(file.tempFilePaths[0]))
	// console.log(plus.io.getFileInfo(file))
	
	// console.log(fileDom.value)
	// console.log(file.getAsDataURL())
	// console.log(fileDom.path)
	// console.log(fileDom.getPath)
	// console.log(file.getPath)
	// console.log(file.value)
	// console.log(fileDom.val())
	
	// plus.zip.compress(path,pathCompress,
	// function(res){
	// 	console.log(pathCompress)
	// 	console.log('压缩成功11122223444444444444444777777777777')
		
	// 	setTimeout(function(){
		
	// 	console.log('jinlaila ')
	// 	let geturl = that.checkUrlFile();
		
	// 	},100)
	// },
	
	
	// let zipfile = file.name;           
	// zipfile =plus.io.convertLocalFileSystemURL(zipfile);  
	// console.log("zipfile绝对路径: " + zipfile);  
	
	// let targetPath = 'doc/';  
	// targetPath =plus.io.convertLocalFileSystemURL(targetPath);  
	// console.log("targetPath绝对路径: " + targetPath);
	
	// plus.zip.compress(zipfile, targetPath,  
	//     function() {                      
	//         // uni.showToast({ title: '解压缩成功!', icon: 'none' });  
	//         // uni.navigateTo({  
	//         //         url: '../web-view.d?cid=webid&name=webname'  
	//         // });  
	//     },function(error) {  
	//         console.log("解压缩失败: " + JSON.stringify(error));  
	//         // uni.showToast({ title: '解压缩失败!', icon: 'none' });  
	// });
	
	// let aurl ='file://'+ plus.io.convertLocalFileSystemURL(file);
	// // if (window.createObjectURL!=undefined) { // basic
	// // aurl = window.createObjectURL(file) ;
	// // } else if (window.URL!=undefined) { // mozilla(firefox)
	// // aurl = window.URL.createObjectURL(file) ;
	// // } else if (window.webkitURL!=undefined) { // webkit or chrome
	// // aurl = window.webkitURL.createObjectURL(file) ;
	// // }
	
	
	// plus.zip.compress(file,'_html/', 
	// function(){
	// 	console.log('压缩成功111')
	// },  
	// function(error){
	// 	console.log("11yyy压缩失败: " + JSON.stringify(error));
	// });
	
	if (!url) {return;}
	tis.style.display = 'flex';
	
	let formData = new FormData();
		formData.append(key, file);
	console.log(formData)
	console.log(data)
	// console.log(JSONObject.fromObject(data))
	
	 var reader = new FileReader(); 
	      reader.readAsDataURL(file); 
	      reader.onload = function(e){      
	        var urlsrc = this.result;
	        console.log(urlsrc)
	      }
	
	
	for (let keys in data) {
		formData.append(keys, data[keys]);
	}
	
	let xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	
	for (let keys in header) {
		xhr.setRequestHeader(keys, header[keys]);
	}
	xhr.upload.addEventListener("progress", function(event) {
		if(event.lengthComputable){
			let percent = Math.ceil(event.loaded * 100 / event.total) + "%";
			progress.innerText = `努力上传中..${percent}`;
			plus.nativeUI.showWaiting('努力上传中..');
		}
	}, false);
	
	xhr.ontimeout = function(){
		// xhr请求超时事件处理
		plus.nativeUI.toast('请求超时！');
		progress.innerText = '请求超时';
		setTimeout(()=>{
			tis.style.display = 'none';
			
			// plus.webview.currentWebview().close();
		},1000);
	};
	
	xhr.onreadystatechange = (ev) => {
		
		if(xhr.readyState == 4) {
			console.log('status：'+xhr.status);
			
			if (xhr.status == 200) {
				// progress.innerText = '上传成功';
				plus.nativeUI.toast('上传成功！');
				console.log('返回数据：'+xhr.responseText);
				// location.href = `callback?fileName=${file.name}&id=${xhr.responseText}`;
				location.href = `callback?fileName=${escape(file.name)}&id=${escape(xhr.responseText)}`;
				
			}
			else {
				progress.innerText = '上传失败了';
				plus.nativeUI.toast('上传失败！');
			}
			
			setTimeout(()=>{
				tis.style.display = 'none';
				plus.nativeUI.closeWaiting();
				// plus.webview.currentWebview().close();
			},100);
			
		}
	};
	xhr.send(formData);
	
	cancel.addEventListener("click", ()=>{
		xhr.abort();
		// plus.webview.currentWebview().close();
	});
}


mask.addEventListener("click", () => {
	// plus.webview.currentWebview().close();
});

document.addEventListener('UniAppJSBridgeReady', () => {
	let {url,key,header,formData} = plus.webview.currentWebview();
	fileDom.addEventListener('change', (event) => {
		let file = fileDom.files[0];
		if(file.size > (1024*1024 * 10)) {
			plus.nativeUI.toast('单个文件不能超过10M,请重新上传');
			return;
		}
		console.log(file.name);
		createUpload(file, url, key,header,formData);
	}, false);
});