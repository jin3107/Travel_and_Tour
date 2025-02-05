## Định dạng CSS:

  # z-index: 1000;
    - Sử dụng để xác định thứ tự chồng chéo của các phần tử
    - Giá trị z-index có thể là số nguyên âm hoặc dương
    - Chỉ tác dụng đối với các pt có thuộc tính position được đặt là relative, absolute, fixed, sticky. Các pt có thuộc tính position là static sẽ không bị ảnh hưởng

  # position: absolute;
    - position: absolute; pt sẽ được "tách" ra khỏi dòng chảy bình thường (không chiếm không gian trong bố cục), và định vị bằng các thuộc tính như top, right, bottom, left

  # transition: 0.3s;
    Tạo hiệu ứng chuyển đổi mượt mà cho các thay đổi về thuộc tính (transform, opacity, color...). Hiệu ứng sẽ diễn ra trong 0.3 giây.

  # transform: translate(-50%);
    - transform: Thuộc tính áp dụng các phép biến đổi như tịnh tiến, chia tỷ lệ, xoay
    - translate(-50%): Di chuyển phần tử theo chiều ngang 50% chiều rộng của nó sang trái.
      -----> Căn giữa cả theo chiều ngang và chiều dọc.
  
  # gap: 1.5rem;
    gap định nghĩa khoảng cách giữa các phần tử con trong một container flexbox hoặc grid.
  
  # justify-content: center;
    Thuộc tính này dùng trong bố cục flexbox hoặc grid. Nó căn giữa các phần tử con theo trục chính
  
  # display: grid;
    Thiết lập phần tử trở thành một container grid. Grid là hệ thống bố cục 2D, cho phép tổ chức các phần tử con thành hàng (rows) và cột (columns).
  
  # row-gap: 10rem;
    Định nghĩa 10rem là khoảng cách giữa các hàng trong grid, 160px nếu kích thước font mặc định là 16px.

  # object-fit: cover; 
    kiểm soát cách nội dung bên trong một phần tử thay đổi kích thước và hiển thị khi kích thước của phần tử không khớp với tỷ lệ của nội dung. Nó thường được áp dụng cho các phần tử img hoặc video.

  # mix-blend-mode: multiply; 
    là một thuộc tính CSS được sử dụng để điều chỉnh cách một phần tử hòa trộn với phần tử nền bên dưới nó. Áp dụng các quy tắc hòa trộn màu sắc. multiply (nhân): Màu sắc của phần tử được nhân với màu của phần nền.