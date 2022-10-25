$('input').each((index,value)=>{
    $(value).val($(value).attr('defaultValue'))
  })

$('.onchange-send-form').each((index,node)=>{

  node.addEventListener('blur',(e)=>{
    if(node.innerText.toString()!==node.parentNode.children[1].value.toString()){
      node.parentNode.children[1].value = node.innerText;
      node.parentNode.children[1].form.submit();
    }
  })
})
const menuBtn = $($('.menu')[0])
const closeBtn = $($('.close')[0])
const sidePanal = $('aside')

menuBtn.click(()=>{
  closeBtn.css('visibility','visible');
  sidePanal.css('visibility','visible');
})
closeBtn.click(()=>{
  closeBtn.css('visibility','hidden');
  sidePanal.css('visibility','hidden');
})
const assignCloseBtn = $('#assign-close');
const assignForm = $('#assign-form');
const assignOpenBtn = $('#assign-open')

assignCloseBtn.click(()=>{
  assignForm.css('visibility','hidden');
})
assignOpenBtn.click(()=>{
  assignForm.css('visibility','visible');
})
