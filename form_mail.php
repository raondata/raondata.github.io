<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>메일을 발송하였습니다 </title>
</head>
<body>



 <?php
 //var_dump($_POST['think']);


        $mailTo		=	"dev@raondata.ai";
	    // 받는사람 메일 주소;
        $mailFrom	=	"help@test.co.kr";
        // 보내는사람 메일주소
        $name = $_POST['name'] ;
        $mailSubject = '=?UTF-8?B?'.base64_encode( "고객님의 상담문의 메일입니다" ).'?=';

        $mailContent =
        '신청업체 :'.$_POST['company_name'].'<br>'
        .'신청자 명 / 신청자 직책 :'.$_POST['fromName'].'<br>'
		.'상담내용 :'.$_POST['content'];

        $mailHeader = "from: $fromName <$mailFrom>\r\n";
        $mailHeader .= "MIME-Version: 1.0\r\n";
        $mailHeader .= "Content-type: text/html; charset=utf-8\r\n";
		$mailHeader.= 'bcc: seongchoi@raondata.ai,jeewooyoon@raondata.ai' . "\r\n"; //참고수신인

        $mailResult = mail ($mailTo, $mailSubject,
        $mailContent, $mailHeader,'-f'.$mailFrom);



         ?>

         </body>

</html>
