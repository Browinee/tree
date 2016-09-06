window.onload = function() {
        
  var drawTree =build_file_tree(data);
  var bBody =document.getElementsByTagName('body')[0]; 
  bBody.innerHTML=drawTree;
  addClick();
  


};





function addClick(){
  
  //let ulList = document.getElementsByTagName('ul');
    let ulList = document.getElementsByTagName('body')[0];


    console.log(ulList.children[0].children);
  for(let i =0,len=ulList.children.length;i<len;i++){
     //ulList[i].addEventListener('click',function(){
        // ulList[i].children.style.display='none';
           ulList.children[i].children.style.display='none';
        //ulChild.style.display='none';
       
          
     

  } 

}





function build_file_tree(data) {
        var tree="";
        for(let i =0, len=data.length;i<len;i++){

             tree += "<ul class='tree-folder'>";
             
             for(let key in data[i]){
                 let tempData=data[i];
                if(tempData[key]===null){break;}
                if(key==="data" && tempData[key]!== null){ 
                  if(tempData[key].length ===0){
                    break;
                  
                  }
                  tree+=build_file_tree(tempData[key]);
                }else{
                   tree+="<li>"+tempData[key]+"</li>";  
                }

                

             }   
             tree+="</ul>";
            
        }   
        return  tree; 
        
}              





        







                                                        
var data = [
        { name: "系統保留 (C:)", data: [
                        { name: "Program Files", data: [
                                { name: "Java", data: [
                                        { name: "jdk1.8.0_60", data: null },
                                        { name: "jre1.8.0_60", data: null }
                                        ] },
                                { name: "Sublime Text 2", data: [
                                        { name: "Pristine Packages", data: [
                                                { name: "ActionScript.sublime-package" },
                                                { name: "C#.sublime-package" },
                                                { name: "C++.sublime-package" },
                                                { name: "CSS.sublime-package" }
                                                ] },
                                        { name: "sublime_text.exe" },
                                        { name: "python26.zip" },
                                        { name: "python26.dll" }
                                        ] },
                                { name: "Microsoft.Net", data: [
                                        { name: "ADOBD.NET", data: [
                                                { name: "100", data: [
                                                        { name: "Microsoft.AnalysisServices.AdomdClient.dll" }
                                                        ] }
                                                ] }
                                ] },
                        { name: "Program Files (x86)", data: [
                                { name: "Adobe", data: [
                                        { name: "Acrobat Reader DC", data: [
                                                { name: "Esl", data: [
                                                        { name: "AiodLite.dll" }
                                                        ] },
                                                { name: "Reader", data: [
                                                        { name: "plug_ins", data: [
                                                                { name: "AcroForm", data: [
                                                                        { name: "PMP", data: [
                                                                                { name: "AdobePDF417.pmp" },
                                                                                { name: "DataMatrix.pmp" },
                                                                                { name: "QRCode.pmp" }
                                                                                ] },
                                                                        { name: "adobepdf.xdc" }
                                                                        ] },
                                                                 { name: "Multimedia.api" }
                                                                ] },
                                                        { name: "ACE.dll" },
                                                        { name: "WebResources", data: [
                                                                { name: "Resource0", data: [
                                                                        { name: "static", data: [
                                                                                { name: "css", data: [
                                                                                        { name: "app", data: [
                                                                                                { name: "dev", data: [
                                                                                                        { name: "cef" },
                                                                                                        { name: "libs" }
                                                                                                        ] }
                                                                                                ] },
                                                                                        { name: "main.css" }
                                                                                        ] }
                                                                                ] },
                                                                        { name: "index.html" }
                                                                        ] }
                                                                ] }
                                                        ] },
                                                { name: "ReadMe.htm" },
                                                { name: "ReadMeCT.htm" }
                                                ] }
                                        ] }
                                ] }
                        ] }
                ] },
        { name: "本機磁碟 (D:)", data: [] }
];
