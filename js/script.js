// ############### PC 메인 01~05 탭 메뉴 ###############
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.gnb li');
  const mainSections = document.querySelectorAll('[id^="main-"]'); // #main-01, #main-02, ... 가져오기

  // 페이지 로드 시 "게임설명" 탭에 해당하는 #main-01만 보이게 설정
  mainSections.forEach(section => {
    section.style.display = 'none'; // 모든 main 섹션 숨기기
  });
  document.getElementById('main-01').style.display = 'block'; // #main-01만 보이게 설정

  // 탭 클릭 시
  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      // 모든 #main- 섹션 숨기기
      mainSections.forEach(section => {
        section.style.display = 'none';
      });

      // 탭에 active 클래스 추가
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // 클릭된 탭에 해당하는 main 섹션만 보이게 함
      const targetSectionId = `main-${tab.getAttribute('data-target').split('-')[1]}`;
      document.getElementById(targetSectionId).style.display = 'block';
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle'); // SVG 메뉴 토글 버튼
  const gnbMenu = document.querySelector('.gnb'); // 메뉴 요소

  // 메뉴 토글 클릭 시
  menuToggle.addEventListener('click', function() {
    gnbMenu.classList.toggle('show'); // 'show' 클래스를 토글하여 드롭다운/숨기기
  });
});