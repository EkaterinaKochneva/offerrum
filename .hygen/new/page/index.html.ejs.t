---
to: <%= absPath %>/index.html
---

<!DOCTYPE html>
<html lang="ru">

  @@include('../../components/head/index.html',{
    "title":"<%= name %>"
  })

  <body>
    <div class="wrapper">

      @@include('../../components/header/index.html')

      <main>
        <div class="container">
          
          
        </div>
      </main> 

      @@include('../../components/footer/index.html')

    </div>

    <script src="/assets/js/scripts.min.js"></script>

  </body>
</html>