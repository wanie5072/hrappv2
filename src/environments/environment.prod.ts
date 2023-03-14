export const environment = {
  production: true,

  /* LIST API
LOGIN (HTTP POST) :
URL: http://consurv.no-ip.biz/leave/logintest
Expected variable : username, password, gsm
On successful will return : JSON(userdata)

Change Password (HTTP POST) :
URL: http://consurv.no-ip.biz/leave/changepassword
Expected variable : username, olpass, newpass
On successful will return : JSON(userdata)

Leave Status (HTTP POST) :
URL: http://consurv.no-ip.biz/leave/leavedetail
Expected variable : staffid
On successful will return : JSON(userdata)

Leave approve (HTTP POST) :
URL: http://consurv.no-ip.biz/leave/updateapprove
Expected variable : leaveid, action
On successful will return : JSON(userdata)

Apply Leave (HTTP POST) :
URL: http://consurv.no-ip.biz/leave/submitleave
Expected variable :  staff_id, leavetype, reason, currentDate, endDate, image, halfday1,halfday2
On successful will return : JSON(userdata)

TYPE OF LEAVE (HTTP GET) :
URL: http://consurv.no-ip.biz/leave/leavetype
On successful will return : JSON(userdata)
*/
  
  
  //LOGIN (HTTP POST) :
//URL: http://consurv.no-ip.biz/leave/logintest
//Expected variable : username, password, gsm
//On successful will return : JSON(userdata)
apiUrl1: 'http://consurv.no-ip.biz/leave/',

//checkin-checkout
apiUrl2: 'http://consurv.no-ip.biz:3000/api/dailycheck',

//login
apiUrl3: 'http://consurv.no-ip.biz:3000/api/',


};
