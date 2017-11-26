 function $(id) {
    return document.getElementById(id)
  }
  var liArr = $('ad').children;
  var imgWidth = $('ad').children[0].offsetWidth;
  function animate(obj, target, attr) {
    clearInterval(obj.timer);

    //管理定时器
    obj.timer = setInterval(function() {
      var step = (target-obj.offsetLeft) / 10 ;
      step = step > 0 ? Math.ceil(step):Math.floor(step);
      obj.style.left = obj.offsetLeft + step + 'px';
      //当移动一个宽度了就停止
      if (obj.offsetLeft%imgWidth==0) {
          clearInterval(obj.timer);
      

           if(attr==="left") {
            var newLi = obj.children[liArr.length-1].cloneNode(true);
           obj.insertBefore(newLi, obj.children[0]);
           obj.removeChild(obj.children[liArr.length-1]);
           // 必须恢复到这个位置，因为添加的子元素会使盒子内的子元素位置变化
           obj.style.left = -imgWidth*2 + 'px';
           }else {
              var newLi = obj.children[0].cloneNode(true);
              obj.appendChild(newLi);
              obj.removeChild(obj.children[0])
              obj.style.left = -imgWidth*2 + 'px';
           }
       }
    },20);

  }

  var timer = setInterval(autoplay, 2000)
  function autoplay() {
    animate($('ad'), -imgWidth*3, "right");
  }

  $('left').onclick = function() {
    clearInterval(timer)
    animate($('ad'), -imgWidth, 'left')
  }

  $('right').onclick = function() {
    clearInterval(timer)
    animate($('ad'), -imgWidth*3, 'right')
  }
