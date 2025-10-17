// Inject the header markup at the very top of the <body>
document.body.insertAdjacentHTML('afterbegin', `
    <!-- ============================================================================== -->
    <!-- 주석: 시작 - 웹사이트 통합을 위한 필수 HTML 섹션                              -->
    <!-- 이 섹션의 코드를 웹사이트의 <body> 태그 바로 안쪽에 복사하여 붙여넣으세요.        -->
    <!-- ============================================================================== -->

    <!-- 1. 메인 헤더 (로고, 네비게이션, 카테고리 버튼 포함) -->
    <header class="header">
        <div class="top-header">
                <ul>
                    <li><a href="#">로그인</a></li>
                    <span class="divider"></span>
                    <li><a href="javascript:void(0)" class="open-channel-talk">고객센터</a></li> <!--고객센터 페이지 생기면 링크 바꾸기-->
                    <span class="divider"></span>
                    <li><a href="https://tr.ee/epic-yc-feedback">에픽에 바란다</a></li>
                    <span class="divider"></span>
                    <li><a href="https://tr.ee/epic-yc-feedback">블로그</a></li>
                    <span class="divider"></span>
                    <li><a href="https://tr.ee/epic-yc-feedback">캠퍼스 찾기</a></li>
                    <span class="divider"></span>
                    <li><a href="https://tr.ee/epic-yc-feedback">온라인 도서관</a></li>
                </ul>
            </div>
        <div class="header-container">
            <div class="header-inner">
                <a href="#" class="logo"><img src="assets/ELA-text-logo-blacktext.png" alt="Epic English Logo"></a>
                <nav class="nav-menu">
                    <a href="booster.html">윈터부스터</a>
                    <a href="#kinder" class="nav-trigger">킨더관</a>
                    <a href="#elementary" class="nav-trigger">초등관</a>
                    <a href="#middle" class="nav-trigger">중등관</a>
                    <a href="#about">에픽스쿨</a>
                </nav>
                <div>
                     <button id="category-button" class="btn-category">
                        <div class="hamburger-icon">
                            <span class="hamburger-line top"></span>
                            <span class="hamburger-line bottom"></span>
                        </div>
                        <span class="btn-text">입학상담 예약</span>
                    </button>
                </div>
            </div>

            <!-- 데스크탑 드롭다운 메뉴 -->
            <div id="desktop-menu" class="desktop-menu">
                <div id="desktop-menu-panel" class="desktop-menu-panel">
                    <div class="desktop-menu-grid">
                        <div class="campus"> <h6>킨더관</h6> 
                            <ul> 
                                <li><a href="#kinder">SEED | 4세 (준비중)</a></li> 
                                <li><a href="#kinder">SPROUT | 5세 (준비중)</a></li> 
                                <li><a href="#kinder">ROOT | 6세 (준비중)</a></li> 
                            </ul>
                        </div>
                        <div class="campus"> <h6>초등관</h6> 
                            <ul> 
                                <li><a href="#kinder">BASE | 예비초 ~ 2학년</a></li> 
                                <li><a href="#kinder">CORE | 초등 2 ~ 5학년</a></li> 
                                <li><a href="#kinder">NEXT | 초등 5 ~ 6학년</a></li> 
                            </ul>
                        </div>
                        <div class="campus"> <h6>중등관</h6> 
                            <ul> 
                                <li><a href="#kinder">RISE | 중 1 (준비중)</a></li>
                                <li><a href="#kinder">LEAP | 중 2 (준비중)</a></li>
                                <li><a href="#kinder">MASTER | 중 3 (준비중)</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- 2. 모바일 사이드바 메뉴 컨테이너 -->
    <div>
        <div id="menu-backdrop" class="menu-backdrop"></div>
        <div id="menu-panel" class="menu-panel">
            <div class="menu-content">
                <div class="menu-header">
                    <p>파닉스 완성부터 수능까지<br>우리 아이 영어 완성의 에픽</p>
                </div>
                <div class="menu-section">
                    <div class="menu-icon-grid">
                        <a href="#" class="menu-icon-item">
                        <div class="menu-icon-circle">
                            <img src="assets/menu/myON.svg" alt="myON" class="myON">
                        </div>
                        <span class="menu-icon-text">온라인 도서관</span>
                        </a>

                        <a href="#" class="menu-icon-item">
                        <div class="menu-icon-circle">
                            <img src="assets/menu/login.svg" alt="login">
                        </div>
                        <span class="menu-icon-text">로그인</span>
                        </a>

                        <a href="#" class="menu-icon-item">
                        <div class="menu-icon-circle">
                            <img src="assets/menu/reservation.svg" alt="reservation" class="reservation">
                        </div>
                        <span class="menu-icon-text">입학상담 예약</span>
                        </a>
                    </div>
                    </div>
                <hr class="menu-divider">
                    <div class="menu-list-section">
                    <div class="menu-group">
                        <h3 class="menu-group-title">특강모집</h3>
                        <ul class="menu-group-list">
                        <li>
                            <a href="#kinder" class="menu-link">
                            <span>2026 윈터부스터</span>
                            </a>
                        </li>
                    </div>
                    <div class="menu-group">
                        <h3 class="menu-group-title">에픽</h3>
                        <ul class="menu-group-list">
                        <li>
                            <a href="#kinder" class="menu-link">
                            <span>캠퍼스 찾기</span>
                            </a>
                        </li>
                        <li>
                            <a href="#kinder" class="menu-link">
                            <span>워크숍</span>
                            </a>
                        </li>
                        <li>
                            <a href="#kinder" class="menu-link">
                            <span>블로그</span>
                            </a>
                        </li>
                    </div>
                    <div class="menu-group">
                        <h3 class="menu-group-title">프로그램</h3>
                        <ul class="menu-group-list">
                        <li>
                            <a href="#kinder" class="menu-link">
                            <span>BASE | 예비초 ~ 2학년</span>
                            </a>
                        </li>
                        <li>
                            <a href="#kinder" class="menu-link">
                            <span>CORE | 초등 2 ~ 5학년</span>
                            </a>
                        </li>
                        <li>
                            <a href="#kinder" class="menu-link">
                            <span>NEXT | 초등 5 ~ 6학년</span>
                            </a>
                        </li>
                        <li>
                            <a href="#kinder" class="menu-link" style="color: #cacacaff;">
                            <span>킨더관 (준비중)</span>
                            </a>
                        </li>
                        <li>
                            <a href="#kinder" class="menu-link" style="color: #cacacaff;">
                            <span>중등관 (준비중)</span>
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div class="menu-group">
                        <h3 class="menu-group-title">고객지원</h3>
                        <ul class="menu-group-list">
                        <li>
                            <a href="#kinder" class="menu-link">
                            <span>고객센터</span>
                            </a>
                        </li>
                        <li>
                            <a href="#kinder" class="menu-link">
                            <span>에픽에 바란다</span>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
            </div>
        </div>
    </div>
`);

// Cache DOM references used throughout the header interactions
const categoryButton = document.getElementById('category-button');
const mobileMenuPanel = document.getElementById('menu-panel');
const menuBackdrop = document.getElementById('menu-backdrop');
const desktopMenuContainer = document.getElementById('desktop-menu');
const desktopMenuPanel = document.getElementById('desktop-menu-panel');
let isMobileMenuOpen = false;
let isDesktopMenuOpen = false;
let hoverTimeout;
const primaryNavTriggers = document.querySelectorAll('.nav-trigger');

const openMobileMenu = () => {
    if (isMobileMenuOpen) return;
    menuBackdrop.classList.add('is-open');   // 보이기 + 페이드인
    document.body.style.overflow = 'hidden';
    categoryButton.classList.add('is-open'); 
    setTimeout(() => {
        mobileMenuPanel.classList.add('is-open'); // 슬라이드 인
    }, 10);
    isMobileMenuOpen = true;
};

const closeMobileMenu = () => {
    if (!isMobileMenuOpen) return;
    menuBackdrop.classList.remove('is-open');
    categoryButton.classList.remove('is-open');
    setTimeout(() => {
        mobileMenuPanel.classList.remove('is-open');
        document.body.style.overflow = '';
    }, 300);
    isMobileMenuOpen = false;
};

const openDesktopMenu = () => {
    if (isDesktopMenuOpen) return;
    desktopMenuContainer.classList.add('is-open'); 
    setTimeout(() => {
        desktopMenuPanel.classList.add('is-open');
    }, 10);
    isDesktopMenuOpen = true;
};

const closeDesktopMenu = () => {
    if (!isDesktopMenuOpen) return;
    desktopMenuPanel.classList.remove('is-open');
    setTimeout(() => {
        desktopMenuContainer.classList.remove('is-open');
    }, 200);
    isDesktopMenuOpen = false;
};

categoryButton.addEventListener('click', (e) => {
    e.stopPropagation();
    if (window.innerWidth < 1024) {
        isMobileMenuOpen ? closeMobileMenu() : openMobileMenu();
    } /*else {
        isDesktopMenuOpen ? closeDesktopMenu() : openDesktopMenu();
    }*/
});

menuBackdrop.addEventListener('click', closeMobileMenu);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (isMobileMenuOpen) closeMobileMenu();
        if (isDesktopMenuOpen) closeDesktopMenu();
    }
});

document.addEventListener('click', (e) => {
    if (isDesktopMenuOpen && !desktopMenuContainer.contains(e.target) && !categoryButton.contains(e.target)) {
        closeDesktopMenu();
    }
});

const startCloseTimer = () => {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(closeDesktopMenu, 200);
};

const cancelCloseTimer = () => {
    clearTimeout(hoverTimeout);
};

const attachDesktopHover = (element) => {
    element.addEventListener('mouseenter', () => {
        if (window.innerWidth >= 1024) {
            cancelCloseTimer();
            openDesktopMenu();
        }
    });
    element.addEventListener('mouseleave', () => {
        if (window.innerWidth >= 1024) {
            startCloseTimer();
        }
    });
    element.addEventListener('focus', () => {
        if (window.innerWidth >= 1024) {
            cancelCloseTimer();
            openDesktopMenu();
        }
    });
    element.addEventListener('blur', () => {
        if (window.innerWidth >= 1024) {
            startCloseTimer();
        }
    });
};

/*attachDesktopHover(categoryButton);*/
primaryNavTriggers.forEach(trigger => attachDesktopHover(trigger));

desktopMenuContainer.addEventListener('mouseenter', () => {
    if (window.innerWidth >= 1024) {
        cancelCloseTimer();
    }
});
desktopMenuContainer.addEventListener('mouseleave', () => {
    if (window.innerWidth >= 1024) {
        startCloseTimer();
    }
});
desktopMenuContainer.addEventListener('focusin', () => {
    if (window.innerWidth >= 1024) {
        cancelCloseTimer();
    }
});
desktopMenuContainer.addEventListener('focusout', () => {
    if (window.innerWidth >= 1024) {
        startCloseTimer();
    }
});
