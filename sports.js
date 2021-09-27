let up=document.querySelector(".up");
      up.addEventListener('click',()=>{
        window.scrollTo(0,0);
      })
      


      var navLink=document.querySelectorAll(".nav-link");
      navLink.forEach((ele)=>{
        ele.addEventListener('click',()=>{
          if(ele.innerHTML==='Home')
          {
            window.scrollTo(0,0);
          }
          else if(ele.innerHTML==='About')
          {
            window.scrollTo(0,820);
          }
          else if(ele.innerHTML==='News')
          {
            window.scrollTo(0,1410);
          }
          else if(ele.innerHTML==='Gallary')
          {
            window.scrollTo(0,2355);
          }
          else if(ele.innerHTML==='Contact')
          {
            window.scrollTo(0,3355);
          }
        })
      })