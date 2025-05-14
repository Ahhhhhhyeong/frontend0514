
  function fn_open(index) {
    // 모든 menu-detail 숨기기
    const allDetails = document.querySelectorAll('.menu-detail');
    allDetails.forEach(detail => {
      detail.style.display = 'none';
    });

    // 클릭한 index에 해당하는 menu-detail 보이기
    const targetDetail = document.querySelectorAll('.menu li')[index].querySelector('.menu-detail');
    targetDetail.style.display = 'block';
  }

  function fn_close() {
    // 모든 menu-detail 닫기
    const allDetails = document.querySelectorAll('.menu-detail');
    allDetails.forEach(detail => {
      detail.style.display = 'none';
    });
  }