let parent=document.getElementById('parent');
let child=document.getElementById('child');

parent.addEventListener('click',()=>{
    console.log('parent is clicked');
},true);/// pass true which will let you to propagate the event to child 

child.addEventListener('click',()=>{
    console.log('child is clicked');
},); 