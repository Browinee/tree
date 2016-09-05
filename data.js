window.onload = function() {
        
  var drawTree =build_file_tree(data);
  var bBody =document.getElementsByTagName('body')[0];
   
  bBody.innerHTML=drawTree;
};


function build_file_tree(data) {
        var tree="";
      
         
         for(let i =0, j=data.length;i<j;i++){

                tree += "<ul class='tree-folder'>"
                let tempData = data[i];
                for(let k in tempData){
                        console.log(tempData[k]);
                   if(!isNull(tempData[k])){
                        if(typeof tempData[k] =="object" && tempData[k].length>0){
                       
                          tree+=build_file_tree(tempData[k]);
                        }else if( tempData[k].length==0 ){
                          break;
                        
                         }else {
                           tree+="<li>"+tempData[k]+"</i>";
                                
                         }
                   



                   }
                        


                    
                      
                }

                tree+="</ul>";
          }   
        
        return tree;
}


function isNull(obj){
        var isNullValue;
        for(var key in obj){
          if(typeof obj[key]=="undefined") {
                isNullValue=true;
                break;
          }else{
                isNullValue=false};
                

        }
        return isNullValue;
}

var data = [ {name:1},
             {name:2,data:[{name:"data 2"}]},
             {name:3,data:null}
           ];



                                                        
// var data = [
//         { name: "系統保留 (C:)", data: [
//                         { name: "Program Files", data: [
//                                 { name: "Java", data: [
//                                         { name: "jdk1.8.0_60", data: null },
//                                         { name: "jre1.8.0_60", data: null }
//                                         ] },
//                                 { name: "Sublime Text 2", data: [
//                                         { name: "Pristine Packages", data: [
//                                                 { name: "ActionScript.sublime-package" },
//                                                 { name: "C#.sublime-package" },
//                                                 { name: "C++.sublime-package" },
//                                                 { name: "CSS.sublime-package" }
//                                                 ] },
//                                         { name: "sublime_text.exe" },
//                                         { name: "python26.zip" },
//                                         { name: "python26.dll" }
//                                         ] },
//                                 { name: "Microsoft.Net", data: [
//                                         { name: "ADOBD.NET", data: [
//                                                 { name: "100", data: [
//                                                         { name: "Microsoft.AnalysisServices.AdomdClient.dll" }
//                                                         ] }
//                                                 ] }
//                                 ] },
//                         { name: "Program Files (x86)", data: [
//                                 { name: "Adobe", data: [
//                                         { name: "Acrobat Reader DC", data: [
//                                                 { name: "Esl", data: [
//                                                         { name: "AiodLite.dll" }
//                                                         ] },
//                                                 { name: "Reader", data: [
//                                                         { name: "plug_ins", data: [
//                                                                 { name: "AcroForm", data: [
//                                                                         { name: "PMP", data: [
//                                                                                 { name: "AdobePDF417.pmp" },
//                                                                                 { name: "DataMatrix.pmp" },
//                                                                                 { name: "QRCode.pmp" }
//                                                                                 ] },
//                                                                         { name: "adobepdf.xdc" }
//                                                                         ] },
//                                                                  { name: "Multimedia.api" }
//                                                                 ] },
//                                                         { name: "ACE.dll" },
//                                                         { name: "WebResources", data: [
//                                                                 { name: "Resource0", data: [
//                                                                         { name: "static", data: [
//                                                                                 { name: "css", data: [
//                                                                                         { name: "app", data: [
//                                                                                                 { name: "dev", data: [
//                                                                                                         { name: "cef" },
//                                                                                                         { name: "libs" }
//                                                                                                         ] }
//                                                                                                 ] },
//                                                                                         { name: "main.css" }
//                                                                                         ] }
//                                                                                 ] },
//                                                                         { name: "index.html" }
//                                                                         ] }
//                                                                 ] }
//                                                         ] },
//                                                 { name: "ReadMe.htm" },
//                                                 { name: "ReadMeCT.htm" }
//                                                 ] }
//                                         ] }
//                                 ] }
//                         ] }
//                 ] },
//         { name: "本機磁碟 (D:)", data: [] }
// ];
