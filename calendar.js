
$(".drag").draggable({
    revert: "invalid",
    start: function (e, ui) {
      
      $(this).data("oldDate", $(this).parent().data("date"));
    }
  });
  
 
  $("td[data-date]").droppable({
    drop: function (e, ui) {
      var drag = ui.draggable,
        drop = $(this),
        oldDate = drag.data("oldDate"), 
        newDate = drop.data("date"), 
        dragID = drag.data("userid"),
        dropID = drop.data("userid"); 
      if (oldDate != newDate || dragID != dropID) {
        $(drag).detach().css({ top: 0, left: 0 }).appendTo(drop);
        $(drag).data("userid", dropID); 
      } else {
        return $(drag).css({ top: 0, left: 0 }); 
      }
    }
  });
  

  $(".drag").hover(
    function () {
      var isAdmin = 1; 
      if (isAdmin == 1) {
        $(this)
          .css("z-index", "999")
          .prepend(
            '<div class="opt-tools"><div class="opt-edit"><i class="fas fa-pen"></i></div><div class="opt-trash"><i class="fas fa-trash"></i></div></div>'
          );
      }
    },
    function () {
     
      $(this).css("z-index", "0").find(".opt-tools").remove();
    }
  );
  

  $(document).on("click", ".opt-edit", function () {
   
    var taskid = $(this).parent().parent().data("taskid"),
      userid = $(this).parent().parent().data("userid");
   
    var date = $(this).closest("td").data("date");
   
    $("#ktxt")[0].jscolor.fromString("FFFFFF");
    $("#kbg")[0].jscolor.fromString("8E8E8E");
    $("#demotaak2").css("color", "#FFFFFF");
    $("#demotaak1").css("border-left-color", "#8E8E8E");
    $("#demotaak2").css("background-color", "#8E8E8E");
    $("#edittask").modal("show");
  });
  

  $(document).on("click", ".opt-trash", function () {
    var taskid = $(this).parent().parent().data("taskid");
  
    $("#taskdelid").val(taskid);
    $("#modal-delete").html(
      "Are you sure you want to delete task ID <b>" + taskid + "</b>?"
    );
    $("#deletetask").modal("show");
  });
  

  $(document).on("click", "#confdelete", function () {
    var taskid = $("#taskdelid").val();
    $("div")
      .find("[data-taskid=" + taskid + "]")
      .remove();
    $("#deletetask").modal("hide");
  });
  
  function changeColor(id, c) {
    if (id == "ctxt") {
      $("#demotaak2").css("color", "#" + c);
    } else if (id == "cbg") {
      $("#demotaak1").css("border-left-color", "#" + c);
      $("#demotaak2").css("background-color", "#" + c);
    }
    return false;
  }
  