var $addBtn = $('button[name=add-btn]');
$addBtn.on('click', function() {
  var $todolnput = $('input[name=todo]');

  $todolnput.val($.trim($todolnput.val()));
  if ($todolnput.val() == '') {
    alert('할일을 입력해주세요.');
    $todolnput.foncus();
    return false;
  }

  $('.main-list').prepend('<li>' + $todolnput.val() + '<button class="btn btn-danger" onclick="deleteBtnClicked(this);">삭제</button></li>');
  $todolnput.val('');
});

function deleteBtnClicked(btn){
  $(btn).parent().remove();
}