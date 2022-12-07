/* CommunityRead.html */

stickyNav();

let $dropdownMenu = $(".dropdown-menu.dropdown-menu-right.sticky-nav-menu");
let $boardMenu = $(".dropdown-menu.dropdown-menu-right.board-menu");
let $boardDeleteBtn = $(".boardDelete");
let $boardUpdateBtn = $(".boardUpdate");
let $commentMenu = $(".dropdown-menu.dropdown-menu-right.comment-menu");
let $commentContent = $("textarea[name='comment-input']");
let $commentSubmitBtn = $(".write-comment-submit");
let $loginModal = $(".swal2-container.swal2-center");
let navCheck = -1;
let commentCheck = -1;

const $file = $("#file-input");
let $deleteFileBtn = $("img.delete-badge");


/* 스크롤이 최상단이 아니면 제목 nav 보이기 */
$(window).scroll(function(event){
    stickyNav();
});


/* 제목 nav의 도시락 버튼 클릭 시 드롭메뉴 보이기 */
$("button#__BVID__1564__BV_toggle_").on("click", function(){
    openDropdown($dropdownMenu);
});


/* 게시글 도시락 버튼 시 수정, 삭제 메뉴 보이기 */
$(".board-dropdownmenu-menuBtn").on("click", function(){
    openBoardMenu($boardMenu);
});


/* 댓글 도시락 버튼 클릭 시 수정, 삭제 메뉴 보이기 */
$("button#__BVID__1555__BV_toggle_").on("click", function(){
    openCommentMenu($commentMenu);
});


/* 댓글 입력 시 로그인 안 되어 있을 경우 로그인 모달창 띄우기 */
// $("#__BVID__1499").on("focus", function(){
//     openLoginModal();
// });


/* 로그인 모달 취소 버튼 클릭 시 돌아가기 */
$(".swal2-cancel.btn").on("click", function(){
    closeLoginModal();
});

/* 제목Nav 스크롤 최하단일 때 사라지게 하기 */
function stickyNav(){
    let $scrollTop = $(this).scrollTop();

    if($scrollTop == 0){
        $("#app-sticky-nav .fixed").removeClass("show");
    }else {
        $("#app-sticky-nav .fixed").addClass("show");
    }
}

function openDropdown(menu){
    menu.toggle();
}

function openBoardMenu(menu){
    menu.toggle();
}

function openCommentMenu(menu){
    $(`".` + menu + `"`).toggle();
}

/* 로그인 모달 띄우기 */
function openLoginModal(){
    $loginModal.css('display', 'block');
    $("body").css('overflow-y', 'hidden');
}

/* 로그인 모달 닫기 */
function closeLoginModal(){
    $loginModal.css('display', 'none');
    $("body").css('overflow-y', 'auto');
}

/* 댓글 사진 첨부 시 div 생성 */
$file.on('change', function (e) {
    var reader = new FileReader();
    let type = e.target.files[0].type;

    reader.readAsDataURL(e.target.files[0]);

    reader.onload = function (e) {
        let url = e.target.result;
        let text = "";

        if (url.includes('image')) {
            text += `<div data-v-60f50a1e="" class="image-preview">`;
            text += `<img data-v-60f50a1e="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01LjM2NCA0LjIzNGEuNzk4Ljc5OCAwIDEgMC0xLjEzIDEuMTNMNi44NyA4LjAwMWwtMi42MzcgMi42MzZhLjguOCAwIDAgMCAxLjEzIDEuMTI5TDggOS4xM2wyLjYzNiAyLjYzNWEuNzk4Ljc5OCAwIDEgMCAxLjEzLTEuMTNMOS4xMyA4LjAwMmwyLjYzNy0yLjYzN2EuOC44IDAgMCAwLTEuMTMtMS4xMjlMOCA2Ljg3IDUuMzY0IDQuMjM0eiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=" class="delete-badge">`;
            text += `<img data-v-60f50a1e="" src="` + url + `" alt="미리보기 이미지" class="image">`;
            text += `</div>`;

            $(".comment-body").append(text);
            $file.attr('disabled', 'true');
            $(".attach-image-icon").css('cursor', 'default');
            $(".attach-image-icon").attr('src', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Im0xMi43NSAyLjUgMS42NzggMS43NmgyLjkwNWMxLjAwOSAwIDEuODM0Ljc5IDEuODM0IDEuNzU5djEwLjU1NWMwIC45NjgtLjgyNSAxLjc2LTEuODM0IDEuNzZIMi42NjdjLTEuMDA5IDAtMS44MzQtLjc5Mi0xLjgzNC0xLjc2VjYuMDJjMC0uOTY4LjgyNS0xLjc2IDEuODM0LTEuNzZoMi45MDVMNy4yNSAyLjVoNS41ek0xMCA4LjE1NWMtMS44OTggMC0zLjQzOCAxLjUyLTMuNDM4IDMuMzkzIDAgMS44NzIgMS41NCAzLjM5MiAzLjQzOCAzLjM5MiAxLjg5OCAwIDMuNDM4LTEuNTIgMy40MzgtMy4zOTIgMC0xLjg3My0xLjU0LTMuMzkzLTMuNDM4LTMuMzkzeiIgZmlsbD0iI0M1QzVDNSIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=');
        } else {
            alert("사진파일만 업로드 가능합니다.");

            return;
        }
    }
});

/* 첨부파일 x 클릭 시 div 삭제 */
$(".comment-body").on('click', '.delete-badge', function(){
    $file.removeAttr('disabled');
    $(".attach-image-icon").css('cursor', 'pointer');
    $(".attach-image-icon").attr('src', 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Im0xMi43NSAyLjUgMS42NzggMS43NmgyLjkwNWMxLjAwOSAwIDEuODM0Ljc5IDEuODM0IDEuNzU5djEwLjU1NWMwIC45NjgtLjgyNSAxLjc2LTEuODM0IDEuNzZIMi42NjdjLTEuMDA5IDAtMS44MzQtLjc5Mi0xLjgzNC0xLjc2VjYuMDJjMC0uOTY4LjgyNS0xLjc2IDEuODM0LTEuNzZoMi45MDVMNy4yNSAyLjVoNS41ek0xMCA4LjE1NWMtMS44OTggMC0zLjQzOCAxLjUyLTMuNDM4IDMuMzkzIDAgMS44NzIgMS41NCAzLjM5MiAzLjQzOCAzLjM5MiAxLjg5OCAwIDMuNDM4LTEuNTIgMy40MzgtMy4zOTIgMC0xLjg3My0xLjU0LTMuMzkzLTMuNDM4LTMuMzkzeiIgZmlsbD0iIzJEMkQyRCIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=');
    $(".image-preview").remove();
});

/* 댓글 내용 입력 시 등록 버튼 보이기 */
$commentContent.on('keyup', function(){
  if(!$commentContent.val()){
      $commentSubmitBtn.removeClass("active");
      return;
  }
    $commentSubmitBtn.addClass("active");
});



/* ================================== Board ==================================*/

let url = decodeURI(window.location.href).split("/");
let boardId = url[url.length - 1];

readBoard(boardId);

/* 게시글 보기 */
function readBoard(boardId){
    communityService.getBoardDetail(
        boardId, showBoardDetail
    );
}

/* 게시글 삭제 */
$boardDeleteBtn.on('click', function(){
    communityService.deleteBoard(boardId, deleteBoard);
});


function showBoardDetail(board){
    let text = "";

    $(".categoryDetail").html(board.boardCategory);
    $(".post-service-name").html(board.boardCategory);
    $(".board-title").html(board.boardTitle);
    $(".board-writer-profile").attr('src', board.memberProfilePath + board.memberProfileUuid + board.memberProfileName);
    $(".board-writer-name").html(board.memberName);
    $(".board-createdDate").html(board.createdDate);
    $(".board-boardView").html(' · 조회 ' + board.boardView);
    $boardUpdateBtn.attr('href', '/community/update?id=' + board.boardId);
    $(".board-content").html(board.boardContent);

    board.files.forEach(file => {
        text += `<li data-v-7614b52f="" data-type="lightGallery" data-exthumbimage="https://static.cdn.soomgo.com/upload/media/b057a7b9-b84d-49e1-a376-956cc5f087bc.jpg?h=160&amp;w=160" data-sub-html-src="https://static.cdn.soomgo.com/upload/media/b057a7b9-b84d-49e1-a376-956cc5f087bc.jpg?h=160&amp;w=160" data-src="https://static.cdn.soomgo.com/upload/media/b057a7b9-b84d-49e1-a376-956cc5f087bc.jpg" data-sub-html=" " class="grid-image-list">`;
        text += `<img data-v-7614b52f="" alt="4298D74C-9291-4543-8137-3820671DEA3C.jpg" class="image" data-src="https://static.cdn.soomgo.com/upload/media/b057a7b9-b84d-49e1-a376-956cc5f087bc.jpg" src="https://static.cdn.soomgo.com/upload/media/b057a7b9-b84d-49e1-a376-956cc5f087bc.jpg" lazy="loaded">`;
        text += `</li>`;
    })
    $(".grid-image-wrapper").html(text);

    // $(".post-react-item comments > span").html('댓글 ' + board.comment.length);

    // plusBoardView(board);
}


function deleteBoard(){
    location.href = "/community";
}

function plusBoardView(board){
    communityService.plusBoardView(
        board, plusAfterBoardView
    );
}

function plusAfterBoardView(boardView){

}


/* ================================== Comment ==================================*/

showComment(boardId);

/* 댓글 목록 보기 */
function showComment(boardId){
    commentService.getCommentList(
        boardId, showCommentList
    );
}

$commentSubmitBtn.on("click", function(){
    saveComment();
});

/* 댓글 등록 */
function saveComment(){
    commentService.save({
        boardId: boardId,
        memberId: 3,
        commentContent: $commentContent.val()
    }, function(){
        $commentContent.val('');
        $commentSubmitBtn.removeClass("active");
        showComment(boardId);
    });
}

function showCommentList(comments){
    let text = "";

    comments.forEach(comment => {
        text += `<li data-v-eb37dd0c="" data-v-e30e236e="" class="post-comments-list-item">`;
        text += `<div data-v-6f126738="" data-v-eb37dd0c="" class="post-comment-wrapper">`;
        text += `<div data-v-6f126738="" class="profile-image provider">`;
        text += `<img data-v-6f126738="" alt="" class="image" data-src="https://static.cdn.soomgo.com/upload/profile/dce93681-1662-4df6-b116-bed3bc418d25.jpg?h=110&amp;w=110" src="` + comment.commentFilePath + comment.commentFileUuid + comment.commentFileName + `" lazy="loaded">`;
        text += `</div>`;
        text += `<div data-v-6f126738="" class="comment-information">`;
        text += `<span data-v-6f126738="" class="user-name sg-text-subhead4 sg-font-bold sg-text-gray-900">` + comment.memberName + `</span>`;
        text += `<div data-v-6f126738="" class="content">`;
        text += `<p data-v-6f126738="" class="text sg-text-body2 sg-font-regular">`;
        text += `<span data-v-6f126738="">` + comment.commentContent + `</span>`;
        text += `</p></div>`;
        text += `<div data-v-6f126738="" class="comment-action-group sg-text-description sg-font-regular">`;
        text += `<div data-v-6f126738="" class="comment-react">`;
        text += `<span data-v-6f126738="" class="text">` + comment.createdDate + `</span>`;
        text += `</div>`;
        text += `<div data-v-6f126738="" class="more-action">`;
        text += `<div data-v-6f126738="" class="dropdown b-dropdown show btn-group" id="__BVID__1555">`;
        text += `<button aria-haspopup="true" aria-expanded="true" type="button" class="btn board-dropdown-toggle btn-secondary btn-comment ` + comment.commentId +`" id="__BVID__1555__BV_toggle_" onclick="javascript:openCommentMenu(this.classList)"></button>`;
        text += `<ul role="menu" tabindex="-1" class="dropdown-menu dropdown-menu-right comment-menu" aria-labelledby="__BVID__1555__BV_toggle_" style="position: absolute; transform: translate3d(-116px, 22px, 0px); top: 0px; left: 0px; will-change: transform;" x-placement="bottom-end">`;
        text += `<li data-v-77f4e41c="" role="presentation">`;
        text += `<a role="menuitem" href="#" target="_self" class="dropdown-item commentUpdate">수정</a>`;
        text += `</li>`;
        text += `<li data-v-77f4e41c="" role="presentation">`;
        text += `<a role="menuitem" href="#" target="_self" class="dropdown-item commentDelete" style="color: red;">삭제</a>`;
        text += `</li></ul></div></div></div></div></div>`;
        text += `</li>`;
    });

    $(".post-comments-list").html(text);
}





