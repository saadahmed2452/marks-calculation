function data(s1,s2,s3,s4,s5,s6,s){
    const total = s1+s2+s3+s4+s5+s6
    const avg  = (total / 600)
    const percentage = avg *100;
    
      return(`the student ${s}   total marks is ${total} and the average is ${avg} and the per is ${percentage}%`)
    }






    function listenToclick (e){
        e.preventDefault();
         const s1 =Number(document.getElementById("s1").value)
         const s2 =Number(document.getElementById("s2").value)
         const s3 =Number(document.getElementById("s3").value)
         const s4 =Number(document.getElementById("s4").value)
         const s5 =Number(document.getElementById("s5").value)
         const s6 =Number(document.getElementById("s6").value)
         const s =String(document.getElementById("name").value)   
         const template  = data(s1,s2,s3,s4,s5,s6,s);
         console.log(template)
         document.getElementById("temp").innerText = template
    }
    
    
    document.getElementById("myForm").addEventListener("submit",listenToclick)
