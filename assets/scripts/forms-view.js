{
    const signinForm = $("#signin-form");
    const asEmployeeBtn = $("#signin-employee-btn");
    const asAdminBtn = $("#signin-admin-btn");
    const activeColor = "rgb(35, 240, 144)"
    const deadColor = "brown"
    asEmployeeBtn.css("color",activeColor);
    asAdminBtn.css("color",deadColor);
    signinForm.attr('action','/user/session/create/false')
    asEmployeeBtn.click(()=>{
        asEmployeeBtn.css("color",activeColor);
        asAdminBtn.css("color",deadColor)
        signinForm.attr('action','/user/session/create/false')
    
    })
    asAdminBtn.click(()=>{
        asEmployeeBtn.css("color",deadColor)
        asAdminBtn.css("color",activeColor);
        signinForm.attr('action','/user/session/create/true')
    })
}