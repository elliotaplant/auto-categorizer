export const EXAMPLE_EMAIL = `Delivered-To: elliotaplant@gmail.com
Received: by 2002:a05:6358:3211:b0:1dc:b09f:ae0b with SMTP id a17csp5432740rwe;
        Mon, 24 Mar 2025 06:54:08 -0700 (PDT)
X-Google-Smtp-Source: AGHT+IEaoGwknmq8SWBP5/LF6dWDnwDAfpdsSvgGvaZ7nJBQyOVQ5Zrp2kipGnfuoRpXlEBGQ2eL
X-Received: by 2002:ad4:5caa:0:b0:6ea:d604:9e4f with SMTP id 6a1803df08f44-6eb34a27d9emr286929016d6.19.1742824448544;
        Mon, 24 Mar 2025 06:54:08 -0700 (PDT)
ARC-Seal: i=1; a=rsa-sha256; t=1742824448; cv=none;
        d=google.com; s=arc-20240605;
        b=CPxuojkCxUb3F9fB+ocJ9cJbvHeovjMFArUKjEiKjdX6COGXNDL7XqLnYHFW5y0KoM
         eu6uMY+WEoY4gZji6+/uumRAsKmDoSSwyi1OOnmqsfNOMkhejqHfYexYRtrJFRHHZ5RK
         YHaXehRFUg0C67p+cJVVkSNTAOwUKod/F+CkLgfB8FTKkwk/fnW+2F74mloyp1PtgwPo
         hfNR3Hfjxsny3sdMmi10T3yIEj6//5ak9M//1n2pUmjnxX3HL5m2Xx0YiJNz258DCXoG
         7Ov8GDFAuHrv89Twpf0HRzDguNvJG7BwV36iUBbBo3R64gWQnEdmoxPjDHX1akUzrJAS
         76Ig==
ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20240605;
        h=feedback-id:bounces-to:mime-version:subject:message-id:to:from:date
         :dkim-signature:dkim-signature;
        bh=ESs77DmjlKhMiFdmonxy5VVEz1x5oIjcuLa95fKLbBA=;
        fh=fhODGK+sv+1gtmdvWjDCrrUnS016z/19K28qUi78gFs=;
        b=b22wFMApX1kaBX4NUz80f0FNYUMqyYX6T+A8u5z2jkIyTXo9DfI0lnc4TCFaLgydwn
         wHWobBugCkEy1ySxcKExYw/ZXwSqGb6WanjNbtV3l2ZKxVpmJadrBaNUlcsoP1aIPinq
         zj/hwNAETCjRz7tA2Sw/vvTGagwXOSAF6YyNzjl9QJsnOOQlJNCne+yWiM6IZflDgXaX
         joPilKLfFGN0VTq++5OOOQwZsq/FGGEWtQDaq28D9jqcioUk4iRsIklcbVzM1Gctzjzc
         +zVFBLTXA43euBdIl3uUtV4n4CMkmInGE9ZBhCbKKAuhzNez1OinhfoU0z1cr0HuA69J
         XiyQ==;
        dara=google.com
ARC-Authentication-Results: i=1; mx.google.com;
       dkim=pass header.i=@amazon.com header.s=eaxkvsyelrnxjh4cicqyjjmtjpetuwjx header.b=bX9XNvUN;
       dkim=pass header.i=@amazonses.com header.s=6gbrjpgwjskckoa6a5zn6fwqkn67xbtw header.b=HB0AZLJH;
       spf=pass (google.com: domain of 202503241354076f0c20a445c047ccb39cd7b48310p0na-c39zak9dxfbm50@bounces.amazon.com designates 54.240.13.143 as permitted sender) smtp.mailfrom=202503241354076f0c20a445c047ccb39cd7b48310p0na-C39ZAK9DXFBM50@bounces.amazon.com;
       dmarc=pass (p=QUARANTINE sp=QUARANTINE dis=NONE) header.from=amazon.com
Return-Path: <202503241354076f0c20a445c047ccb39cd7b48310p0na-C39ZAK9DXFBM50@bounces.amazon.com>
Received: from a13-143.smtp-out.amazonses.com (a13-143.smtp-out.amazonses.com. [54.240.13.143])
        by mx.google.com with ESMTPS id 6a1803df08f44-6eb3f01bf3bsi75033056d6.333.2025.03.24.06.54.08
        for <elliotaplant@gmail.com>
        (version=TLS1_3 cipher=TLS_AES_128_GCM_SHA256 bits=128/128);
        Mon, 24 Mar 2025 06:54:08 -0700 (PDT)
Received-SPF: pass (google.com: domain of 202503241354076f0c20a445c047ccb39cd7b48310p0na-c39zak9dxfbm50@bounces.amazon.com designates 54.240.13.143 as permitted sender) client-ip=54.240.13.143;
Authentication-Results: mx.google.com;
       dkim=pass header.i=@amazon.com header.s=eaxkvsyelrnxjh4cicqyjjmtjpetuwjx header.b=bX9XNvUN;
       dkim=pass header.i=@amazonses.com header.s=6gbrjpgwjskckoa6a5zn6fwqkn67xbtw header.b=HB0AZLJH;
       spf=pass (google.com: domain of 202503241354076f0c20a445c047ccb39cd7b48310p0na-c39zak9dxfbm50@bounces.amazon.com designates 54.240.13.143 as permitted sender) smtp.mailfrom=202503241354076f0c20a445c047ccb39cd7b48310p0na-C39ZAK9DXFBM50@bounces.amazon.com;
       dmarc=pass (p=QUARANTINE sp=QUARANTINE dis=NONE) header.from=amazon.com
DKIM-Signature: v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=eaxkvsyelrnxjh4cicqyjjmtjpetuwjx; d=amazon.com; t=1742824448; h=Date:From:To:Message-ID:Subject:MIME-Version:Content-Type; bh=1ybbpLy02js2alhEeD2pOgjUjjql1wkimVPV8NMltqQ=; b=bX9XNvUNv1lALD36Jbi6M1CMd2xOHQo89ywlddha8HaapD2ukvRgl2O7ZdtU40KR 1GbAmBBK36IIBf298rdvody3s8oJ3oWfE9lFuVpSozMxFROPGuDL/PQ+lx/zYCQjsR4 4a6kCxiYVUCapyIc2z2yjRzLdX+4AzufX+rvfPHY=
DKIM-Signature: v=1; a=rsa-sha256; q=dns/txt; c=relaxed/simple; s=6gbrjpgwjskckoa6a5zn6fwqkn67xbtw; d=amazonses.com; t=1742824448; h=Date:From:To:Message-ID:Subject:MIME-Version:Content-Type:Feedback-ID; bh=1ybbpLy02js2alhEeD2pOgjUjjql1wkimVPV8NMltqQ=; b=HB0AZLJHw2U5vZGB812am/ZyhY/YxRWS9KaaICOMQiRwwkYc2WhD5u3ft2vb8Lg9 lpLUifBrDwETbNsLkdPABI8fqt5UOG0ReZi3dikXTTKKRxRjjw7g9jMUpY3s4C6sojW eFHD73P4zhXQOUMOVWw9j2o9tqjel4/xW68zg4uo=
Date: Mon, 24 Mar 2025 13:54:08 +0000
From: "Amazon.com" <auto-confirm@amazon.com>
To: elliotaplant@gmail.com
Message-ID: <01000195c86ea00f-7ef20e27-4d4d-4012-b7ce-432fa7ff7c2b-000000@email.amazonses.com>
Subject: Ordered: "Amazon Basics Stapler with..."
MIME-Version: 1.0
Content-Type: multipart/alternative; boundary="----=_Part_3028565_434066593.1742824447991"
X-AMAZON-MAIL-RELAY-TYPE: notification
Bounces-to: 202503241354076f0c20a445c047ccb39cd7b48310p0na-C39ZAK9DXFBM50@bounces.amazon.com
X-AMAZON-METADATA: CA=C39ZAK9DXFBM50-CU=A39WWIBEV8S2M3
X-Original-MessageID: <urn.rtn.msg.202503241354076f0c20a445c047ccb39cd7b48310p0na@1742824447993.>
Feedback-ID: 1044873430::1.us-east-1.ZHcGJK6s+x+i9lRHKog4RW3tECwWIf1xzTYCZyUaiec=:AmazonSES
X-SES-Outgoing: 2025.03.24-54.240.13.143

------=_Part_3028565_434066593.1742824447991
Content-Type: text/plain; charset=utf-8
Content-Transfer-Encoding: quoted-printable


 =20

    Thanks for your order, Elliot!
Ordered

Shipped

Out for delivery

Delivered









Arriving Thursday

Elliot - OAKLAND, CA

Order #
113-9615736-3549843

View or edit order
https://www.amazon.com/gp/css/order-details?orderID=3D113-9615736-3549843&r=
ef_=3Dfed_veo

* Amazon Basics Stapler with 1000 Staples, Office Stapler, 25 Sheet Capacit=
y, Non-Slip, Black
  Quantity: 1
  6.13 USD


Total
6.76 USD




=C2=A92025 Amazon.com, Inc. or its affiliates. Amazon and all related marks=
 are trademarks of Amazon.com, Inc. or its affiliates, Amazon.com, Inc. 410=
 Terry Avenue N., Seattle, WA 98109.

By placing your order, you agree to Amazon.com=E2=80=99s [Privacy Notice](h=
ttps://www.amazon.com/gp/help/customer/display.html?ie=3DUTF8&nodeId=3D4684=
96&ref_=3Dfed_roclt_default_policy) and [ Conditions of Use](https://www.am=
azon.com/gp/help/customer/display.html?ie=3DUTF8&nodeId=3D508088&ref_=3Dfed=
_roclt_default_policy). Unless otherwise noted, items sold by Amazon.com ar=
e subject to sales tax in select states in accordance with the applicable l=
aws of that state. If your order contains one or more items from a seller o=
ther than Amazon.com, it may be subject to state and local sales tax, depen=
ding upon the seller's business policies and the location of their operatio=
ns. Learn more about [tax and seller information](https://www.amazon.com/gp=
/help/customer/display.html?ie=3DUTF8&nodeId=3D202029700&ref_=3Dfed_roclt_d=
efault_policy). Items in this order may be subject to California's Electron=
ic Waste Recycling Act. If any items in this order are subject to that Act,=
 the seller of that item has elected to pay any fees due on your behalf.

Amazon.com
------=_Part_3028565_434066593.1742824447991
Content-Type: text/html; charset=utf-8
Content-Transfer-Encoding: quoted-printable

<!doctype html><html lang=3D"en" dir=3D"auto" xmlns=3D"http://www.w3.org/19=
99/xhtml" xmlns:v=3D"urn:schemas-microsoft-com:vml" xmlns:o=3D"urn:schemas-=
microsoft-com:office:office"><head><title></title><!--[if !mso]><!--><meta =
http-equiv=3D"X-UA-Compatible" content=3D"IE=3Dedge"><!--<![endif]--><meta =
http-equiv=3D"Content-Type" content=3D"text/html; charset=3DUTF-8"><meta na=
me=3D"viewport" content=3D"width=3Ddevice-width,initial-scale=3D1"><style t=
ype=3D"text/css">#outlook a{padding:0}body{margin:0;padding:0;-webkit-text-=
size-adjust:100%;-ms-text-size-adjust:100%}table,td{border-collapse:collaps=
e;mso-table-lspace:0pt;mso-table-rspace:0pt}img{border:0;height:auto;line-h=
eight:100%;outline:0;text-decoration:none;-ms-interpolation-mode:bicubic}p{=
display:block;margin:13px 0}</style><!--[if mso]>
    <noscript>
    <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    </noscript>
    <![endif]--><!--[if lte mso 11]>
    <style type=3D"text/css">.mj-outlook-group-fix{width:100%!important}</s=
tyle>
    <![endif]--><style type=3D"text/css">@media only screen and (min-width:=
600px){.mj-column-per-100{width:100%!important;max-width:100%}.mj-column-pe=
r-50{width:50%!important;max-width:50%}.mj-column-per-25{width:25%!importan=
t;max-width:25%}.mj-column-per-75{width:75%!important;max-width:75%}}</styl=
e><style media=3D"screen and (min-width:600px)">.moz-text-html .mj-column-p=
er-100 { width:100% !important; max-width: 100%; }
.moz-text-html .mj-column-per-50 { width:50% !important; max-width: 50%; }
.moz-text-html .mj-column-per-25 { width:25% !important; max-width: 25%; }
.moz-text-html .mj-column-per-75 { width:75% !important; max-width: 75%; }<=
/style><style type=3D"text/css">@media (prefers-color-scheme:dark){.rio-tex=
t-455{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-456{color:#f=
ff}}@media (prefers-color-scheme:dark){.rio-text-457{color:#fff}}@media (pr=
efers-color-scheme:dark){.rio-text-458{color:#fff}}@media (prefers-color-sc=
heme:dark){.rio-text-459{color:#fff}}@media (prefers-color-scheme:dark){.ri=
o-text-460{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-461{col=
or:#fff}}@media (prefers-color-scheme:dark){.rio-text-462{color:#fff}}@medi=
a (prefers-color-scheme:dark){.rio-text-463{color:#fff}}@media (prefers-col=
or-scheme:dark){.rio-text-464{color:#fff}}@media (prefers-color-scheme:dark=
){.rio-text-465{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-46=
6{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-467{color:#fff}}=
@media (prefers-color-scheme:dark){.rio-text-468{color:#fff}}@media (prefer=
s-color-scheme:dark){.rio-text-469{color:#fff}}@media (prefers-color-scheme=
:dark){.rio-header-179,.rio-header-179 *{color:#fff!important}}@media (pref=
ers-color-scheme:dark){.rio-text-470{color:#fff}}@media (prefers-color-sche=
me:dark){.rio-text-471{color:#fff}}@media (prefers-color-scheme:dark){.rio-=
text-472{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-473{color=
:#fff}}@media (prefers-color-scheme:dark){.rio-text-474{color:#fff}}@media =
(prefers-color-scheme:dark){.rio-text-475{color:#fff}}@media (prefers-color=
-scheme:dark){.rio-text-476{color:#fff}}@media (prefers-color-scheme:dark){=
.rio-text-477{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-478{=
color:#fff}}@media (prefers-color-scheme:dark){.rio-text-479{color:#fff}}@m=
edia (prefers-color-scheme:dark){.rio-text-480{color:#fff}}@media (prefers-=
color-scheme:dark){.rio-text-481{color:#fff}}@media (prefers-color-scheme:d=
ark){.rio-text-482{color:#fff}}@media (prefers-color-scheme:dark){.rio-text=
-483{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-484{color:#ff=
f}}@media (prefers-color-scheme:dark){.rio-header-180,.rio-header-180 *{col=
or:#fff!important}}@media (prefers-color-scheme:dark){.rio-text-485{color:#=
fff}}@media (prefers-color-scheme:dark){.rio-text-486{color:#fff}}@media (p=
refers-color-scheme:dark){.rio-text-487{color:#fff}}@media (prefers-color-s=
cheme:dark){.rio-text-488{color:#fff}}@media (prefers-color-scheme:dark){.r=
io-text-489{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-490{co=
lor:#fff}}@media (prefers-color-scheme:dark){.rio-text-491{color:#fff}}@med=
ia (prefers-color-scheme:dark){.rio-text-492{color:#fff}}@media (prefers-co=
lor-scheme:dark){.rio-text-493{color:#fff}}@media (prefers-color-scheme:dar=
k){.rio-text-494{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-4=
95{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-496{color:#fff}=
}@media (prefers-color-scheme:dark){.rio-header-181,.rio-header-181 *{color=
:#fff!important}}@media (prefers-color-scheme:dark){.rio-text-497{color:#ff=
f}}@media (prefers-color-scheme:dark){.rio-text-498{color:#fff}}@media (pre=
fers-color-scheme:dark){.rio-text-499{color:#fff}}@media (prefers-color-sch=
eme:dark){.rio-text-500{color:#fff}}@media (prefers-color-scheme:dark){.rio=
-text-501{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-502{colo=
r:#fff}}@media (prefers-color-scheme:dark){.rio-text-503{color:#fff}}@media=
 (prefers-color-scheme:dark){.rio-text-504{color:#fff}}@media (prefers-colo=
r-scheme:dark){.rio-text-505{color:#fff}}@media (prefers-color-scheme:dark)=
{.rio-text-506{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-507=
{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-508{color:#fff}}@=
media (prefers-color-scheme:dark){.rio-header-182,.rio-header-182 *{color:#=
fff!important}}@media (prefers-color-scheme:dark){.rio-text-509{color:#fff}=
}@media (prefers-color-scheme:dark){.rio-text-510{color:#fff}}@media (prefe=
rs-color-scheme:dark){.rio-text-511{color:#fff}}@media (prefers-color-schem=
e:dark){.rio-text-512{color:#fff}}@media (prefers-color-scheme:dark){.rio-t=
ext-513{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-514{color:=
#fff}}@media (prefers-color-scheme:dark){.rio-text-515{color:#fff}}@media (=
prefers-color-scheme:dark){.rio-text-516{color:#fff}}@media (prefers-color-=
scheme:dark){.rio-text-517{color:#fff}}@media (prefers-color-scheme:dark){.=
rio-header-183,.rio-header-183 *{color:#fff!important}}@media (prefers-colo=
r-scheme:dark){.rio-text-518{color:#fff}}@media (prefers-color-scheme:dark)=
{.rio-text-519{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-520=
{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-521{color:#fff}}@=
media (prefers-color-scheme:dark){.rio-text-522{color:#fff}}@media (prefers=
-color-scheme:dark){.rio-text-523{color:#fff}}@media (prefers-color-scheme:=
dark){.rio-text-524{color:#fff}}@media (prefers-color-scheme:dark){.rio-tex=
t-525{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-526{color:#f=
ff}}@media (prefers-color-scheme:dark){.rio-header-184,.rio-header-184 *{co=
lor:#fff!important}}@media (prefers-color-scheme:dark){.rio-text-527{color:=
#fff}}@media (prefers-color-scheme:dark){.rio-text-528{color:#fff}}@media (=
prefers-color-scheme:dark){.rio-text-529{color:#fff}}@media (prefers-color-=
scheme:dark){.rio-text-530{color:#fff}}@media (prefers-color-scheme:dark){.=
rio-text-531{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-532{c=
olor:#fff}}@media (prefers-color-scheme:dark){.rio-header-185,.rio-header-1=
85 *{color:#fff!important}}@media (prefers-color-scheme:dark){.rio-text-533=
{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-534{color:#fff}}@=
media (prefers-color-scheme:dark){.rio-text-535{color:#fff}}@media (prefers=
-color-scheme:dark){.rio-text-536{color:#fff}}@media (prefers-color-scheme:=
dark){.rio-text-537{color:#fff}}@media (prefers-color-scheme:dark){.rio-tex=
t-538{color:#fff}}@media (prefers-color-scheme:dark){.rio-header-186,.rio-h=
eader-186 *{color:#fff!important}}@media (prefers-color-scheme:dark){.rio-t=
ext-539{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-540{color:=
#fff}}@media (prefers-color-scheme:dark){.rio-text-541{color:#fff}}@media (=
prefers-color-scheme:dark){.rio-text-542{color:#fff}}@media only screen and=
 (min-width:600px){.rio-asin-image-a7unnTJHoq1pttL4oZ9Uey .productImageTd{h=
eight:122px!important}.rio-asin-image-a7unnTJHoq1pttL4oZ9Uey .productImage{=
max-height:122px!important;max-width:122px!important}}@media (prefers-color=
-scheme:dark){.rio-text-543{color:#fff}}@media (prefers-color-scheme:dark){=
.rio-text-544{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-545{=
color:#fff}}@media (prefers-color-scheme:dark){.rio-text-546{color:#fff}}@m=
edia (prefers-color-scheme:dark){.rio-text-547{color:#fff}}@media only scre=
en and (min-width:600px){.rio-asin-image-9SHHhtsvP2xKQKVwYKxRq2 .productIma=
geTd{height:122px!important}.rio-asin-image-9SHHhtsvP2xKQKVwYKxRq2 .product=
Image{max-height:122px!important;max-width:122px!important}}@media (prefers=
-color-scheme:dark){.rio-text-548{color:#fff}}@media (prefers-color-scheme:=
dark){.rio-text-549{color:#fff}}@media (prefers-color-scheme:dark){.rio-tex=
t-550{color:#fff}}@media (prefers-color-scheme:dark){.rio-text-551{color:#f=
ff}}@media (prefers-color-scheme:dark){.rio-text-552{color:#fff}}@media (pr=
efers-color-scheme:dark){.rio-text-553{color:#fff}}@media (prefers-color-sc=
heme:dark){.rio-text-554{color:#fff}}@media (prefers-color-scheme:dark){.ri=
o-text-555{color:#fff}}@media (prefers-color-scheme:dark){.rio-header-187,.=
rio-header-187 *{color:#fff!important}}@media (prefers-color-scheme:dark){.=
rio-text-556{color:#fff}}@media (prefers-color-scheme:dark){.rio-header-188=
,.rio-header-188 *{color:#fff!important}}@media (prefers-color-scheme:dark)=
{.rio-card,.rio-card-text,.rio-card-text>table,.rio-card>table{background-c=
olor:#181a1a!important}}[data-ogsc] .rio-card,[data-ogsc] .rio-card-text,[d=
ata-ogsc] .rio-card-text>table,[data-ogsc] .rio-card>table{background-color=
:#181a1a!important}.rio-card-text p+p{margin-top:1.2em}.rio-text strong{col=
or:#067d62}.rio-text img{width:100%;height:auto}@media (prefers-color-schem=
e:dark){.rio-text *{color:#fff!important}.rio-text a,.rio-text a>*{color:#6=
ed6e6!important}.rio-text strong{color:#13bd96!important}}[data-ogsc] .rio-=
text *{color:#fff!important}[data-ogsc] .rio-text a,[data-ogsc] .rio-text a=
>*{color:#6ed6e6!important}[data-ogsc] .rio-text strong{color:#13bd96!impor=
tant}.rio-header strong{color:#067d62}@media (prefers-color-scheme:dark){.r=
io-header a{color:#6ed6e6!important}.rio-header strong{color:#13bd96!import=
ant}}[data-ogsc] .rio-header,[data-ogsc] .rio-header *{color:#fff!important=
}[data-ogsc] .rio-header a{color:#6ed6e6!important}[data-ogsc] .rio-header =
strong{color:#13bd96!important}.rio-asin-image .productImage{mix-blend-mode=
:multiply}u+.body .rio-asin-image .productImage{mix-blend-mode:initial!impo=
rtant}@media (prefers-color-scheme:dark){.rio-asin-image .productImageTd{ba=
ckground-image:linear-gradient(#fff,#fff)!important}.rio-asin-image .produc=
tImage{mix-blend-mode:initial!important}}[data-ogsc] .rio-asin-image .produ=
ctImageTd{background-image:linear-gradient(#fff,#fff)!important}[data-ogsc]=
 .rio-asin-image .productImage{mix-blend-mode:initial!important}@media only=
 screen and (min-width:600px){u+.body .rio-asin-image .productImage{mix-ble=
nd-mode:multiply!important}}@media (prefers-color-scheme:dark){.asin-contai=
ner{background:#252626!important}}[data-ogsc] .asin-container{background:#2=
52626!important}.rio-asin-container-image img{mix-blend-mode:multiply;objec=
t-fit:contain}@media (prefers-color-scheme:dark){.rio-asin-container-image =
img{mix-blend-mode:initial!important}}u+.body .rio-asin-container-image img=
{mix-blend-mode:initial!important}@media only screen and (min-width:600px){=
u+.body .rio-asin-container-image img{mix-blend-mode:multiply!important}}[d=
ata-ogsc] .rio-asin-container-image img{mix-blend-mode:initial!important}.p=
riceBadge{color:#cc0c39}@media (prefers-color-scheme:dark){.priceBadge,.pro=
ductHvePrimeDayPrice{color:#fff!important}}[data-ogsc] .priceBadge,[data-og=
sc] .productHvePrimeDayPrice{color:#fff!important}@media (prefers-color-sch=
eme:dark){.productHveDiscount{color:#ff8c8c!important}.productHvePrice{colo=
r:#fff!important}}[data-ogsc] .productHveDiscount{color:#ff8c8c!important}[=
data-ogsc] .productHvePrice{color:#fff!important}@media only screen and (ma=
x-width:599px){table.mj-full-width-mobile{width:100%!important}td.mj-full-w=
idth-mobile{width:auto!important}}.footerCard li,.footerCard p{color:inheri=
t}.footerCard p+p{margin-top:1.2em}@media (prefers-color-scheme:dark){.foot=
erCard div{background-color:#303333!important}.footerLink div{color:#6ed6e6=
!important}.footerText div{color:#c8cccc!important}.lightFooterImg{display:=
none!important}.darkFooterImg{display:block!important}}[data-ogsb] .footerC=
ard div{background-color:#303333!important}[data-ogsc] .footerLink div{colo=
r:#6ed6e6!important}[data-ogsc] .footerText div{color:#c8cccc!important}[da=
ta-ogsc] .lightFooterImg{display:none!important}[data-ogsc] .darkFooterImg{=
display:block!important}</style><style type=3D"text/css">@font-face{font-fa=
mily:Ember;font-weight:700;src:local("Ember"),url(https://m.media-amazon.co=
m/images/G/01/outbound/AmazonEmber_Bd._CB1515450239_.WOFF) format("woff");m=
so-generic-font-family:swiss;mso-font-alt:"Arial"}@font-face{font-family:Em=
ber;font-weight:600;src:local("Ember"),url(https://m.media-amazon.com/image=
s/G/01/outbound/AmazonEmber_Bd._CB1515450239_.WOFF) format("woff");mso-gene=
ric-font-family:swiss;mso-font-alt:"Arial"}@font-face{font-family:Ember;fon=
t-weight:500;src:local("Ember"),url(https://m.media-amazon.com/images/G/01/=
outbound/AmazonEmber_Md._CB1515450239_.WOFF) format("woff");mso-generic-fon=
t-family:swiss;mso-font-alt:"Arial"}@font-face{font-family:Ember;font-weigh=
t:400;font-style:normal;src:local("Ember"),url(https://m.media-amazon.com/i=
mages/G/01/outbound/AmazonEmber_Rg._CB1515450239_.WOFF) format("woff");mso-=
generic-font-family:swiss;mso-font-alt:"Arial"}@font-face{font-family:Ember=
;font-weight:200;src:local("Ember"),url(https://m.media-amazon.com/images/G=
/01/outbound/AmazonEmber_Lt._CB1515450239_.WOFF) format("woff");mso-generic=
-font-family:swiss;mso-font-alt:"Arial"}@font-face{font-family:"Amazon Embe=
r";font-weight:700;src:local("Amazon Ember"),url(https://m.media-amazon.com=
/images/G/01/outbound/AmazonEmber_Bd._CB1515450239_.WOFF) format("woff");ms=
o-generic-font-family:swiss;mso-font-alt:"Arial"}@font-face{font-family:"Am=
azon Ember";font-weight:600;src:local("Amazon Ember"),url(https://m.media-a=
mazon.com/images/G/01/outbound/AmazonEmber_Bd._CB1515450239_.WOFF) format("=
woff");mso-generic-font-family:swiss;mso-font-alt:"Arial"}@font-face{font-f=
amily:"Amazon Ember";font-weight:500;src:local("Amazon Ember"),url(https://=
m.media-amazon.com/images/G/01/outbound/AmazonEmber_Md._CB1515450239_.WOFF)=
 format("woff");mso-generic-font-family:swiss;mso-font-alt:"Arial"}@font-fa=
ce{font-family:"Amazon Ember";font-style:normal;font-weight:400;src:local("=
Amazon Ember"),url(https://m.media-amazon.com/images/G/01/outbound/AmazonEm=
ber_Rg._CB1515450239_.WOFF) format("woff");mso-generic-font-family:swiss;ms=
o-font-alt:"Arial"}@font-face{font-family:"Amazon Ember";font-weight:200;sr=
c:local("Amazon Ember"),url(https://m.media-amazon.com/images/G/01/outbound=
/AmazonEmber_Lt._CB1515450239_.WOFF) format("woff");mso-generic-font-family=
:swiss;mso-font-alt:"Arial"}*{font-family:Ember,'Amazon Ember',Arial,sans-s=
erif;border-spacing:0;margin:0;padding:0}[data-ogsc] :root{--body-bg:#181A1=
A;--body-color:#ffffff}.rootContent{background:#fff!important}.fonts,.sans,=
h1,h2,h3,h4,h5,li,p,table,td,th{color:#0f1111}a{color:#007185;text-decorati=
on:none}@media screen and (max-width:599px){.mobile-only{display:initial!im=
portant}.desktop-only{display:none!important;mso-hide:all!important}}@media=
 screen and (min-width:600px){.mobile-only{display:none!important;mso-hide:=
all!important}}@media (prefers-color-scheme:light){:root{--body-bg:#ffffff;=
--body-color:#000000}}@media (prefers-color-scheme:dark){:root{--body-bg:#1=
81A1A;--body-color:#ffffff}body{background-color:#181a1a!important}.fonts,.=
sans,h1,h2,h3,h4,h5,li,p,table,td,th{color:#fff}a{color:#6ed6e6}.rootConten=
t,.rootContent>table{background:#181a1a!important}}[data-ogsc] .fonts,[data=
-ogsc] .sans,[data-ogsc] h1,[data-ogsc] h2,[data-ogsc] h3,[data-ogsc] h4,[d=
ata-ogsc] h5,[data-ogsc] li,[data-ogsc] p{color:#fff}[data-ogsc] a{color:#6=
ed6e6}[data-ogsc] .rootContent,[data-ogsc] .rootContent>table{background:#1=
81a1a!important}body{background-color:var(--body-bg)!important;color:var(--=
body-color)!important;margin:0!important;padding:0}body>img{position:absolu=
te}table{border-spacing:0}h3,h4,h5,p,table th{font-weight:400;margin:0;padd=
ing:0}td{padding:0}img{border:0}a,span,td{word-break:break-word!important}o=
l,ul{margin-left:32px!important}.button{background-color:#ffd814;color:#0f1=
111!important;border-radius:24px;padding:1px 16px;display:inline-block;box-=
shadow:1px 2px 4px rgba(153,153,153,.2);font-size:13px;line-height:29px;whi=
te-space:nowrap;text-decoration:none;margin-top:4px}.box-shadow a{box-shado=
w:1px 2px 4px rgba(153,153,153,.2)}a,body,table,td{-ms-text-size-adjust:100=
%;-webkit-text-size-adjust:100%}.appleBody a,.appleFooter a{color:#007185!i=
mportant;text-decoration:none}a[x-apple-data-detectors]{color:#007185!impor=
tant;font-family:inherit!important;font-size:inherit!important;font-weight:=
inherit!important;line-height:inherit!important}u+#body a{color:#007185!imp=
ortant;font-family:inherit!important;font-size:inherit!important;font-weigh=
t:inherit!important;line-height:inherit!important}#MessageViewBody a{color:=
#007185!important;font-family:inherit!important;font-size:inherit!important=
;font-weight:inherit!important;line-height:inherit!important}</style><meta =
content=3D"text/html; charset=3DUTF-8" http-equiv=3D"Content-Type"><meta co=
ntent=3D"telephone=3Dno" name=3D"format-detection"><meta content=3D"width=
=3Ddevice-width,initial-scale=3D1;user-scalable=3Dno;" name=3D"viewport"><m=
eta content=3D"IE=3D9; IE=3D8; IE=3D7; IE=3DEDGE" http-equiv=3D"X-UA-Compat=
ible"><meta name=3D"x-apple-disable-message-reformatting"><meta content=3D"=
light dark" name=3D"color-scheme"><meta content=3D"light dark" name=3D"supp=
orted-color-schemes"><!--
             =20
             =20
             =20
              --><style type=3D"text/css">.productListPrice{color:#565959}.=
productDiscount{color:#cc0c39}.productPrice{color:#0f1111}@media (prefers-c=
olor-scheme:dark){.productListPrice{color:#fff!important}.productDiscount{c=
olor:#ff8c8c!important}.productPrice{color:#fff!important}}[data-ogsc] .pro=
ductListPrice{color:#fff!important}[data-ogsc] .productDiscount{color:#ff8c=
8c!important}[data-ogsc] .productPrice{color:#fff!important}</style><style =
type=3D"text/css">.dealBadge{background-color:#cc0c39;color:#fff}.dealText{=
color:#cc0c39}@media (prefers-color-scheme:dark){.dealBadge{background-colo=
r:#ff8c8c!important;color:#000!important}.dealText{color:#ff8c8c!important}=
}[data-ogsc] .dealBadge{background-color:#ff8c8c!important;color:#000!impor=
tant}[data-ogsc] .dealText{color:#ff8c8c!important}</style><!--[if gte mso =
9]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG />
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <style>
        body, h1, h2, h3, h4, table, th, td, p, li, a, .sans, .fonts {
            font-family: Helvetica, Arial, sans-serif !important;
        }
        [data-ogsc] .rootContent, [data-ogsc] .rootContent > table{
          background: #181A1A !important;
        }
    </style>
    <![endif]--></head><body class=3D"body" style=3D"word-spacing:normal;">=
<img width=3D"1" height=3D"1" src=3D"https://www.amazon.com/gp/r.html?C=3D3=
E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Durn:rtn:msg:202503241354076f0c20a445c047=
ccb39cd7b48310p0na&R=3D126PID321E1N5&T=3DO&U=3Dhttps%3A%2F%2Fimages-na.ssl-=
images-amazon.com%2Fimages%2FG%2F01%2Fnav%2Ftransp.gif&H=3DKCWJE5JROA81DGV4=
YLYSQPRABYGA&ref_=3Dpe_125775000_1044873430_opens" /><div style=3D"display:=
none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0=
px;opacity:0;overflow:hidden;">Ordered: "Amazon Basics Stapler with..."&#84=
7; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwn=
j; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbs=
p; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#81=
99; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &sh=
y;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847=
; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj=
; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp=
; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#819=
9; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy=
;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847;=
 &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj;=
 &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp;=
 &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199=
; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;=
&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; =
&zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; =
&nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; =
&#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199;=
 &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&=
#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &=
zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &=
nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &=
#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; =
&shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#=
847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &z=
wnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &n=
bsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#=
8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &=
shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#8=
47; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zw=
nj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nb=
sp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8=
199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &s=
hy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#84=
7; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwn=
j; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbs=
p; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#81=
99; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &sh=
y;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847=
; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj=
; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp=
; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#819=
9; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy=
;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847;=
 &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj;=
 &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp;=
 &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199=
; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;=
&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; =
&zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; =
&nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; =
&#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199;=
 &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&=
#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &=
zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &=
nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &=
#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; =
&shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#=
847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &z=
wnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &n=
bsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#=
8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &=
shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#8=
47; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zw=
nj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nb=
sp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8=
199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &s=
hy;&#847; &zwnj; &nbsp; &#8199; &shy;&#847; &zwnj; &nbsp; &#8199; &shy;</di=
v><div class=3D"body" lang=3D"en" dir=3D"auto"><!--[if mso | IE]><table ali=
gn=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" class=3D"roo=
tContent-outlook" role=3D"presentation" style=3D"width:600px;" width=3D"600=
" bgcolor=3D"#ffffff" ><tr><td style=3D"line-height:0px;font-size:0px;mso-l=
ine-height-rule:exactly;"><![endif]--><div class=3D"rootContent" style=3D"b=
ackground:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;=
"><table align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" =
role=3D"presentation" style=3D"background:#ffffff;background-color:#ffffff;=
width:100%;"><tbody><tr><td style=3D"direction:ltr;font-size:0px;padding:0p=
x 0px 4px 0px;text-align:left;"><!--[if mso | IE]><table role=3D"presentati=
on" border=3D"0" cellpadding=3D"0" cellspacing=3D"0"><![endif]--> <!--[if m=
so | IE]><tr><td align=3D"left" class=3D"sonar-three-link-header-outlook so=
nar-three-link-header-v1-outlook" width=3D"600px" ><table align=3D"center" =
border=3D"0" cellpadding=3D"0" cellspacing=3D"0" class=3D"rio-card-outlook"=
 role=3D"presentation" style=3D"width:600px;" width=3D"600" bgcolor=3D"#fff=
fff" ><tr><td style=3D"line-height:0px;font-size:0px;mso-line-height-rule:e=
xactly;"><![endif]--><div class=3D"rio-card" style=3D"background:#ffffff;ba=
ckground-color:#ffffff;margin:0px auto;border-radius:4px;max-width:600px;">=
<table align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" ro=
le=3D"presentation" style=3D"background:#ffffff;background-color:#ffffff;wi=
dth:100%;border-radius:4px;"><tbody><tr><td style=3D"direction:ltr;font-siz=
e:0px;padding:0px 0px 0px 0px;text-align:left;"><!--[if mso | IE]><table ro=
le=3D"presentation" border=3D"0" cellpadding=3D"0" cellspacing=3D"0"><tr><t=
d align=3D"left" class=3D"" width=3D"600px" ><table align=3D"center" border=
=3D"0" cellpadding=3D"0" cellspacing=3D"0" class=3D"" role=3D"presentation"=
 style=3D"width:600px;" width=3D"600" bgcolor=3D"#232F3E" ><tr><td style=3D=
"line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><=
div style=3D"background:#232F3E;background-color:#232F3E;margin:0px auto;ma=
x-width:600px;"><table align=3D"center" border=3D"0" cellpadding=3D"0" cell=
spacing=3D"0" role=3D"presentation" style=3D"background:#232F3E;background-=
color:#232F3E;width:100%;"><tbody><tr><td style=3D"direction:ltr;font-size:=
0px;padding:8px 4px;text-align:left;"><!--[if mso | IE]><table role=3D"pres=
entation" border=3D"0" cellpadding=3D"0" cellspacing=3D"0"><tr><td align=3D=
"left" class=3D"" style=3D"width:592px;" ><![endif]--><div class=3D"mj-colu=
mn-per-100 mj-outlook-group-fix" style=3D"font-size:0;line-height:0;text-al=
ign:left;display:inline-block;width:100%;direction:ltr;"><!--[if mso | IE]>=
<table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentatio=
n" ><tr><td style=3D"align:left;vertical-align:middle;width:592px;" ><![end=
if]--><div class=3D"mj-column-per-100 mj-outlook-group-fix" style=3D"font-s=
ize:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:m=
iddle;width:100%;"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" =
role=3D"presentation" width=3D"100%"><tbody><tr><td style=3D"vertical-align=
:middle;padding:0;"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0"=
 role=3D"presentation" width=3D"100%"><tbody><tr><td align=3D"center" style=
=3D"font-size:0px;padding:0;word-break:break-word;"><div style=3D"font-fami=
ly:Ember,'Amazon Ember',Arial,sans-serif;font-size:14px;font-weight:bold;le=
tter-spacing:-.02em;line-height:20px;text-align:center;color:#000000;"><mj-=
raw>    </mj-raw><a href=3D"https://www.amazon.com/gp/r.html?C=3D3E92MSAD2L=
HAU&K=3D1NG4SOUTCDRLG&M=3Durn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b=
48310p0na&R=3DZSRGHIC6SDI&T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss=
%2Forder-history%3Fref_%3Dpe_125775000_1044873430_TLH0001BT_fed_yo_default&=
H=3DECC1UGYSRQY08H2FTC4OBUOCMGUA&ref_=3Dpe_125775000_1044873430_TLH0001BT_f=
ed_yo_default" style=3D"color:#FFFFFF; text-decoration:none; white-space: n=
owrap !important;" data-sonar-role=3D"header">Your Orders</a>&#xA0;&#xA0;&#=
xA0;&#xA0;&#xA0;&#xA0; <a href=3D"https://www.amazon.com/gp/r.html?C=3D3E92=
MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Durn:rtn:msg:202503241354076f0c20a445c047ccb=
39cd7b48310p0na&R=3DO2QSKH7X1LLW&T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fy=
our-account%3Fref_%3Dpe_125775000_1044873430_TLH0002BT_fed_ya_default&H=3DB=
DGKSKJUU7Z9MA8LVMMBQYP8E0QA&ref_=3Dpe_125775000_1044873430_TLH0002BT_fed_ya=
_default" style=3D"color:#FFFFFF; text-decoration:none; white-space: nowrap=
 !important;">Your Account</a>&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0; <a href=
=3D"https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=
=3Durn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&R=3D3LDYT90V0=
GSRP&T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fbuyagain%3Fref_%3Dpe_125=
775000_1044873430_TLH0003BT_fed_bia_default&H=3DOYOPZYMEVO92CTVVQRBAIDFWML4=
A&ref_=3Dpe_125775000_1044873430_TLH0003BT_fed_bia_default" style=3D"color:=
#FFFFFF; text-decoration:none; white-space: nowrap !important;">Buy Again</=
a><mj-raw></mj-raw></div></td></tr></tbody></table></td></tr></tbody></tabl=
e></div><!--[if mso | IE]></td></tr></table><![endif]--></div><!--[if mso |=
 IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if =
mso | IE]></td></tr></table></td></tr></table><![endif]--></td></tr></tbody=
></table></div><!--[if mso | IE]></td></tr></table></td></tr><![endif]--> <=
!--[if mso | IE]></table><![endif]--></td></tr></tbody></table></div><!--[i=
f mso | IE]></td></tr></table><![endif]--><!--[if mso | IE]><table align=3D=
"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" class=3D"rootCont=
ent-outlook" role=3D"presentation" style=3D"width:600px;" width=3D"600" bgc=
olor=3D"#ffffff" ><tr><td style=3D"line-height:0px;font-size:0px;mso-line-h=
eight-rule:exactly;"><![endif]--><div class=3D"rootContent" style=3D"backgr=
ound:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;"><ta=
ble align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=
=3D"presentation" style=3D"background:#ffffff;background-color:#ffffff;widt=
h:100%;"><tbody><tr><td style=3D"direction:ltr;font-size:0px;padding:4px 8p=
x 4px 8px;text-align:left;"><!--[if mso | IE]><table role=3D"presentation" =
border=3D"0" cellpadding=3D"0" cellspacing=3D"0"><![endif]--> <!--[if mso |=
 IE]><tr><td align=3D"left" class=3D"" width=3D"600px" ><table align=3D"cen=
ter" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" class=3D"rio-card-out=
look" role=3D"presentation" style=3D"width:584px;" width=3D"584" bgcolor=3D=
"#ffffff" ><tr><td style=3D"line-height:0px;font-size:0px;mso-line-height-r=
ule:exactly;"><![endif]--><div class=3D"rio-card" style=3D"background:#ffff=
ff;background-color:#ffffff;margin:0px auto;border-radius:4px;max-width:584=
px;"><table align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"=
0" role=3D"presentation" style=3D"background:#ffffff;background-color:#ffff=
ff;width:100%;border-radius:4px;"><tbody><tr><td style=3D"direction:ltr;fon=
t-size:0px;padding:12px 8px 16px 8px;text-align:left;"><!--[if mso | IE]><t=
able role=3D"presentation" border=3D"0" cellpadding=3D"0" cellspacing=3D"0"=
><tr><td align=3D"left" class=3D"" width=3D"584px" ><![endif]-->  <!--[if m=
so | IE]><table align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=
=3D"0" class=3D"" role=3D"presentation" style=3D"width:568px;" width=3D"568=
" ><tr><td style=3D"line-height:0px;font-size:0px;mso-line-height-rule:exac=
tly;"><![endif]--><div style=3D"margin:0px auto;max-width:568px;"><table al=
ign=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"pre=
sentation" style=3D"width:100%;"><tbody><tr><td style=3D"direction:ltr;font=
-size:0px;padding:0;padding-bottom:10px;text-align:left;"><!--[if mso | IE]=
><table role=3D"presentation" border=3D"0" cellpadding=3D"0" cellspacing=3D=
"0"><tr><td align=3D"left" class=3D"" style=3D"" ><![endif]--><div style=3D=
"font-family:Ember,'Amazon Ember',Arial,sans-serif;font-size:15px;line-heig=
ht:1;text-align:center;color:#000000;"><h2 style=3D"margin:0;padding:0;font=
-family:Ember,'Amazon Ember',Arial,sans-serif;font-weight:700;font-size:18p=
x;line-height:22px;color:#0F1111;" class=3D"rio-header rio-header-181">Than=
ks for your order, Elliot!</h2></div><!--[if mso | IE]></td></tr></table><!=
[endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></tab=
le><![endif]--> <!--[if mso | IE]></td></tr><tr><td align=3D"left" class=3D=
"" width=3D"584px" ><![endif]-->  <table cellpadding=3D"0" cellspacing=3D"0=
" width=3D"100%" border=3D"0" style=3D"color:#000000;font-family:Ember,'Ama=
zon Ember',Arial,sans-serif;font-size:15px;line-height:22px;table-layout:au=
to;width:100%;border:none;"><tr><td width=3D"25%" valign=3D"top"><table cel=
lpadding=3D"0" cellspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color=
:#000000;font-family:Ember,'Amazon Ember',Arial,sans-serif;font-size:15px;l=
ine-height:22px;table-layout:auto;width:100%;border:none;"><tr><td style=3D=
"height:18px"><table cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" bor=
der=3D"0" style=3D"color:#000000;font-family:Ember,'Amazon Ember',Arial,san=
s-serif;font-size:15px;line-height:22px;table-layout:auto;width:100%;border=
:none;"><tr><td width=3D"50%" height=3D"18"> <table cellpadding=3D"0" cells=
pacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;font-family=
:Ember,'Amazon Ember',Arial,sans-serif;font-size:15px;line-height:22px;tabl=
e-layout:auto;width:100%;border:none;"><tr><td height=3D"7"></td></tr><tr><=
td height=3D"4"></td></tr><tr><td height=3D"7"></td></tr></table> </td><td =
height=3D"18"> <table cellpadding=3D"0" cellspacing=3D"0" width=3D"18" bord=
er=3D"0" style=3D"color:#000000;font-family:Ember,'Amazon Ember',Arial,sans=
-serif;font-size:15px;line-height:22px;table-layout:auto;width:18;border:no=
ne;"><tr><td width=3D"18" height=3D"18"><div style=3D"border-radius:18px;ba=
ckground:#1196AB;line-height:17px;width:18px;height:18px;text-align:center;=
box-shadow:0 0 0 2px #1196AB;"><img src=3D"https://m.media-amazon.com/image=
s/G/01/outbound/etc/steptracker-checkmark.png" width=3D"12" height=3D"10" s=
tyle=3D"width:12px;height:10px;"><!--[if mso | IE]>&nbsp;<![endif]--></div>=
</td></tr></table> </td><td width=3D"50%" height=3D"18"> <table cellpadding=
=3D"0" cellspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000=
;font-family:Ember,'Amazon Ember',Arial,sans-serif;font-size:15px;line-heig=
ht:22px;table-layout:auto;width:100%;border:none;"><tr><td height=3D"7"></t=
d></tr><tr><td height=3D"4" style=3D"background:#E9E7E7"><div style=3D"widt=
h:100%;height:0;border-width:0;background:#1196AB;border-bottom:4px solid #=
1196AB;border-radius:0 2px 2px 0;"></div></td></tr><tr><td height=3D"7"></t=
d></tr></table> </td></tr></table></td></tr><tr><td height=3D"5"></td></tr>=
<tr><td><div style=3D"font-family:Ember,'Amazon Ember',Arial,sans-serif;fon=
t-size:15px;font-weight:700;line-height:21px;text-align:center;color:#0F111=
1;"><span class=3D"rio-text rio-text-485">Ordered</span></div>  </td></tr><=
/table></td><td width=3D"25%" valign=3D"top"><table cellpadding=3D"0" cells=
pacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;font-family=
:Ember,'Amazon Ember',Arial,sans-serif;font-size:15px;line-height:22px;tabl=
e-layout:auto;width:100%;border:none;"><tr><td style=3D"height:18px"><table=
 cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" border=3D"0" style=3D"c=
olor:#000000;font-family:Ember,'Amazon Ember',Arial,sans-serif;font-size:15=
px;line-height:22px;table-layout:auto;width:100%;border:none;"><tr><td widt=
h=3D"50%" height=3D"18">  <table cellpadding=3D"0" cellspacing=3D"0" width=
=3D"100%" border=3D"0" style=3D"color:#000000;font-family:Ember,'Amazon Emb=
er',Arial,sans-serif;font-size:15px;line-height:22px;table-layout:auto;widt=
h:100%;border:none;"><tr><td height=3D"7"></td></tr><tr><td height=3D"4" st=
yle=3D"background:#E9E7E7"><div style=3D"width:100%;height:0;border-width:0=
;background:#E9E7E7;border-bottom:4px solid #E9E7E7;"></div></td></tr><tr><=
td height=3D"7"></td></tr></table></td><td height=3D"18">  <table cellpaddi=
ng=3D"0" cellspacing=3D"0" width=3D"18" border=3D"0" style=3D"color:#000000=
;font-family:Ember,'Amazon Ember',Arial,sans-serif;font-size:15px;line-heig=
ht:22px;table-layout:auto;width:18;border:none;"><tr><td width=3D"18" heigh=
t=3D"18"><div style=3D"border-radius:18px;background:#E9E7E7;line-height:17=
px;width:18px;height:18px;text-align:center;box-shadow:0 0 0 2px #E9E7E7;">=
&nbsp;</div></td></tr></table></td><td width=3D"50%" height=3D"18">  <table=
 cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" border=3D"0" style=3D"c=
olor:#000000;font-family:Ember,'Amazon Ember',Arial,sans-serif;font-size:15=
px;line-height:22px;table-layout:auto;width:100%;border:none;"><tr><td heig=
ht=3D"7"></td></tr><tr><td height=3D"4" style=3D"background:#E9E7E7"><div s=
tyle=3D"width:100%;height:0;border-width:0;background:#E9E7E7;border-bottom=
:4px solid #E9E7E7;"></div></td></tr><tr><td height=3D"7"></td></tr></table=
></td></tr></table></td></tr><tr><td height=3D"5"></td></tr><tr><td> <div s=
tyle=3D"font-family:Ember,'Amazon Ember',Arial,sans-serif;font-size:15px;fo=
nt-weight:400;line-height:21px;text-align:center;color:#0F1111;"><span clas=
s=3D"rio-text rio-text-489">Shipped</span></div> </td></tr></table></td><td=
 width=3D"25%" valign=3D"top"><table cellpadding=3D"0" cellspacing=3D"0" wi=
dth=3D"100%" border=3D"0" style=3D"color:#000000;font-family:Ember,'Amazon =
Ember',Arial,sans-serif;font-size:15px;line-height:22px;table-layout:auto;w=
idth:100%;border:none;"><tr><td style=3D"height:18px"><table cellpadding=3D=
"0" cellspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;fo=
nt-family:Ember,'Amazon Ember',Arial,sans-serif;font-size:15px;line-height:=
22px;table-layout:auto;width:100%;border:none;"><tr><td width=3D"50%" heigh=
t=3D"18">  <table cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" border=
=3D"0" style=3D"color:#000000;font-family:Ember,'Amazon Ember',Arial,sans-s=
erif;font-size:15px;line-height:22px;table-layout:auto;width:100%;border:no=
ne;"><tr><td height=3D"7"></td></tr><tr><td height=3D"4" style=3D"backgroun=
d:#E9E7E7"><div style=3D"width:100%;height:0;border-width:0;background:#E9E=
7E7;border-bottom:4px solid #E9E7E7;"></div></td></tr><tr><td height=3D"7">=
</td></tr></table></td><td height=3D"18">  <table cellpadding=3D"0" cellspa=
cing=3D"0" width=3D"18" border=3D"0" style=3D"color:#000000;font-family:Emb=
er,'Amazon Ember',Arial,sans-serif;font-size:15px;line-height:22px;table-la=
yout:auto;width:18;border:none;"><tr><td width=3D"18" height=3D"18"><div st=
yle=3D"border-radius:18px;background:#E9E7E7;line-height:17px;width:18px;he=
ight:18px;text-align:center;box-shadow:0 0 0 2px #E9E7E7;">&nbsp;</div></td=
></tr></table></td><td width=3D"50%" height=3D"18">  <table cellpadding=3D"=
0" cellspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;fon=
t-family:Ember,'Amazon Ember',Arial,sans-serif;font-size:15px;line-height:2=
2px;table-layout:auto;width:100%;border:none;"><tr><td height=3D"7"></td></=
tr><tr><td height=3D"4" style=3D"background:#E9E7E7"><div style=3D"width:10=
0%;height:0;border-width:0;background:#E9E7E7;border-bottom:4px solid #E9E7=
E7;"></div></td></tr><tr><td height=3D"7"></td></tr></table></td></tr></tab=
le></td></tr><tr><td height=3D"5"></td></tr><tr><td> <div style=3D"font-fam=
ily:Ember,'Amazon Ember',Arial,sans-serif;font-size:15px;font-weight:400;li=
ne-height:21px;text-align:center;color:#0F1111;"><span class=3D"rio-text ri=
o-text-492">Out for delivery</span></div> </td></tr></table></td><td width=
=3D"25%" valign=3D"top"><table cellpadding=3D"0" cellspacing=3D"0" width=3D=
"100%" border=3D"0" style=3D"color:#000000;font-family:Ember,'Amazon Ember'=
,Arial,sans-serif;font-size:15px;line-height:22px;table-layout:auto;width:1=
00%;border:none;"><tr><td style=3D"height:18px"><table cellpadding=3D"0" ce=
llspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;font-fam=
ily:Ember,'Amazon Ember',Arial,sans-serif;font-size:15px;line-height:22px;t=
able-layout:auto;width:100%;border:none;"><tr><td width=3D"50%" height=3D"1=
8">  <table cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" border=3D"0"=
 style=3D"color:#000000;font-family:Ember,'Amazon Ember',Arial,sans-serif;f=
ont-size:15px;line-height:22px;table-layout:auto;width:100%;border:none;"><=
tr><td height=3D"7"></td></tr><tr><td height=3D"4" style=3D"background:#E9E=
7E7"><div style=3D"width:100%;height:0;border-width:0;background:#E9E7E7;bo=
rder-bottom:4px solid #E9E7E7;"></div></td></tr><tr><td height=3D"7"></td><=
/tr></table></td><td height=3D"18">  <table cellpadding=3D"0" cellspacing=
=3D"0" width=3D"18" border=3D"0" style=3D"color:#000000;font-family:Ember,'=
Amazon Ember',Arial,sans-serif;font-size:15px;line-height:22px;table-layout=
:auto;width:18;border:none;"><tr><td width=3D"18" height=3D"18"><div style=
=3D"border-radius:18px;background:#E9E7E7;line-height:17px;width:18px;heigh=
t:18px;text-align:center;box-shadow:0 0 0 2px #E9E7E7;">&nbsp;</div></td></=
tr></table></td><td width=3D"50%" height=3D"18">  <table cellpadding=3D"0" =
cellspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;font-f=
amily:Ember,'Amazon Ember',Arial,sans-serif;font-size:15px;line-height:22px=
;table-layout:auto;width:100%;border:none;"><tr><td height=3D"7"></td></tr>=
<tr><td height=3D"4"></td></tr><tr><td height=3D"7"></td></tr></table></td>=
</tr></table></td></tr><tr><td height=3D"5"></td></tr><tr><td> <div style=
=3D"font-family:Ember,'Amazon Ember',Arial,sans-serif;font-size:15px;font-w=
eight:400;line-height:21px;text-align:center;color:#0F1111;"><span class=3D=
"rio-text rio-text-495">Delivered</span></div> </td></tr></table></td></tr>=
</table><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody><=
/table></div><!--[if mso | IE]></td></tr></table></td></tr><![endif]-->  <!=
--[if mso | IE]></table><![endif]--></td></tr></tbody></table></div><!--[if=
 mso | IE]></td></tr></table><![endif]--><!--[if mso | IE]><table align=3D"=
center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" class=3D"rootConte=
nt-outlook" role=3D"presentation" style=3D"width:600px;" width=3D"600" bgco=
lor=3D"#ffffff" ><tr><td style=3D"line-height:0px;font-size:0px;mso-line-he=
ight-rule:exactly;"><![endif]--><div class=3D"rootContent" style=3D"backgro=
und:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;"><tab=
le align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=
=3D"presentation" style=3D"background:#ffffff;background-color:#ffffff;widt=
h:100%;"><tbody><tr><td style=3D"direction:ltr;font-size:0px;padding:4px 8p=
x 4px 8px;text-align:left;"><!--[if mso | IE]><table role=3D"presentation" =
border=3D"0" cellpadding=3D"0" cellspacing=3D"0"><![endif]--><!--[if mso | =
IE]><tr><td align=3D"left" class=3D"" width=3D"600px" ><table align=3D"cent=
er" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" class=3D"rio-card-outl=
ook" role=3D"presentation" style=3D"width:584px;" width=3D"584" ><tr><td st=
yle=3D"line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endi=
f]--><div class=3D"rio-card" style=3D"margin:0px auto;border-radius:4px;max=
-width:584px;"><table align=3D"center" border=3D"0" cellpadding=3D"0" cells=
pacing=3D"0" role=3D"presentation" style=3D"width:100%;border-radius:4px;">=
<tbody><tr><td style=3D"direction:ltr;font-size:0px;padding:0px 8px 0px 8px=
;text-align:left;"><!--[if mso | IE]><table role=3D"presentation" border=3D=
"0" cellpadding=3D"0" cellspacing=3D"0"><tr><td align=3D"left" class=3D"" w=
idth=3D"584px" ><![endif]--><p style=3D"border-top:solid 1px #BBBFBF;font-s=
ize:1px;margin:0px auto;width:100%;"></p><!--[if mso | IE]><table align=3D"=
left" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=3D"border-top:=
solid 1px #BBBFBF;font-size:1px;margin:0px auto;width:568px;" role=3D"prese=
ntation" width=3D"568px" ><tr><td style=3D"height:0;line-height:0;"> &nbsp;
</td></tr></table></td></tr></table><![endif]--></td></tr></tbody></table><=
/div><!--[if mso | IE]></td></tr></table></td></tr><![endif]--><!--[if mso =
| IE]></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]=
></td></tr></table><![endif]--><!--[if mso | IE]><table align=3D"center" bo=
rder=3D"0" cellpadding=3D"0" cellspacing=3D"0" class=3D"rootContent-outlook=
" role=3D"presentation" style=3D"width:600px;" width=3D"600" bgcolor=3D"#ff=
ffff" ><tr><td style=3D"line-height:0px;font-size:0px;mso-line-height-rule:=
exactly;"><![endif]--><div class=3D"rootContent" style=3D"background:#fffff=
f;background-color:#ffffff;margin:0px auto;max-width:600px;"><table align=
=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presen=
tation" style=3D"background:#ffffff;background-color:#ffffff;width:100%;"><=
tbody><tr><td style=3D"direction:ltr;font-size:0px;padding:4px 8px 4px 8px;=
text-align:left;"><!--[if mso | IE]><table role=3D"presentation" border=3D"=
0" cellpadding=3D"0" cellspacing=3D"0"><![endif]--> <!--[if mso | IE]><tr><=
td align=3D"left" class=3D"rex-multi-order-card-outlook rex-multi-order-car=
d-v1-outlook" width=3D"600px" ><table align=3D"center" border=3D"0" cellpad=
ding=3D"0" cellspacing=3D"0" class=3D"rio-card-outlook" role=3D"presentatio=
n" style=3D"width:584px;" width=3D"584" bgcolor=3D"#ffffff" ><tr><td style=
=3D"line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-=
-><div class=3D"rio-card" style=3D"background:#ffffff;background-color:#fff=
fff;margin:0px auto;border-radius:4px;max-width:584px;"><table align=3D"cen=
ter" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation"=
 style=3D"background:#ffffff;background-color:#ffffff;width:100%;border-rad=
ius:4px;"><tbody><tr><td style=3D"direction:ltr;font-size:0px;padding:12px =
8px 16px 8px;text-align:left;"><!--[if mso | IE]><table role=3D"presentatio=
n" border=3D"0" cellpadding=3D"0" cellspacing=3D"0"><![endif]-->      <!--[=
if mso | IE]><tr><td align=3D"left" class=3D"" width=3D"584px" ><table alig=
n=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" class=3D"" ro=
le=3D"presentation" style=3D"width:568px;" width=3D"568" ><tr><td style=3D"=
line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><d=
iv style=3D"margin:0px auto;max-width:568px;"><table align=3D"center" borde=
r=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" style=3D"=
width:100%;"><tbody><tr><td style=3D"direction:ltr;font-size:0px;padding:0;=
text-align:left;"><!--[if mso | IE]><table role=3D"presentation" border=3D"=
0" cellpadding=3D"0" cellspacing=3D"0"><tr><td align=3D"left" class=3D"" st=
yle=3D"vertical-align:top;width:568px;" ><![endif]--><div class=3D"mj-colum=
n-per-100 mj-outlook-group-fix" style=3D"font-size:0px;text-align:left;dire=
ction:ltr;display:inline-block;vertical-align:top;width:100%;"><table borde=
r=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" width=3D"=
100%"><tbody><tr><td style=3D"vertical-align:top;padding:0;"><table border=
=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" width=3D"1=
00%"><tbody><tr><td align=3D"left" style=3D"font-size:0px;padding:0;word-br=
eak:break-word;"><!--[if mso | IE]><table align=3D"center" border=3D"0" cel=
lpadding=3D"0" cellspacing=3D"0" class=3D"" role=3D"presentation" style=3D"=
width:568px;" width=3D"568" ><tr><td style=3D"line-height:0px;font-size:0px=
;mso-line-height-rule:exactly;"><![endif]--><div style=3D"margin:0px auto;m=
ax-width:568px;"><table align=3D"center" border=3D"0" cellpadding=3D"0" cel=
lspacing=3D"0" role=3D"presentation" style=3D"width:100%;"><tbody><tr><td s=
tyle=3D"direction:ltr;font-size:0px;padding:0;text-align:left;"><!--[if mso=
 | IE]><table role=3D"presentation" border=3D"0" cellpadding=3D"0" cellspac=
ing=3D"0"><tr><td align=3D"left" class=3D"" style=3D"vertical-align:top;wid=
th:568px;" ><![endif]--><div class=3D"mj-column-per-100 mj-outlook-group-fi=
x" style=3D"font-size:0px;text-align:left;direction:ltr;display:inline-bloc=
k;vertical-align:top;width:100%;"><table border=3D"0" cellpadding=3D"0" cel=
lspacing=3D"0" role=3D"presentation" width=3D"100%"><tbody><tr><td style=3D=
"vertical-align:top;padding:0;"><table border=3D"0" cellpadding=3D"0" cells=
pacing=3D"0" role=3D"presentation" width=3D"100%"><tbody><tr><td align=3D"l=
eft" style=3D"font-size:0px;padding:0;word-break:break-word;"><div style=3D=
"font-family:Ember,'Amazon Ember',Arial,sans-serif;font-size:18px;font-weig=
ht:700;line-height:22px;text-align:left;color:#0F1111;"><span class=3D"rio-=
text rio-text-539">Arriving Thursday</span></div></td></tr><tr><td align=3D=
"left" style=3D"font-size:0px;padding:0;word-break:break-word;"><div style=
=3D"font-family:Ember,'Amazon Ember',Arial,sans-serif;font-size:15px;font-w=
eight:400;line-height:21px;text-align:left;color:#0F1111;"><span class=3D"r=
io-text rio-text-541"><b>Elliot - OAKLAND, CA</b></span></div></td></tr><tr=
><td align=3D"left" style=3D"font-size:0px;padding:0;word-break:break-word;=
"><div style=3D"font-family:Ember,'Amazon Ember',Arial,sans-serif;font-size=
:15px;font-weight:400;line-height:21px;text-align:left;color:#0F1111;"><spa=
n class=3D"rio-text rio-text-542"><span>Order #</span> <span>=E2=80=AB113-9=
615736-3549843</span></span></div></td></tr><tr><td align=3D"left" style=3D=
"font-size:0px;padding:0;word-break:break-word;"><!--[if mso | IE]><table a=
lign=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" class=3D""=
 role=3D"presentation" style=3D"width:568px;" width=3D"568" ><tr><td style=
=3D"line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-=
-><div style=3D"margin:0px auto;max-width:568px;"><table align=3D"center" b=
order=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" style=
=3D"width:100%;"><tbody><tr><td style=3D"direction:ltr;font-size:0px;paddin=
g:0;text-align:left;"><!--[if mso | IE]><table role=3D"presentation" border=
=3D"0" cellpadding=3D"0" cellspacing=3D"0"><tr><td align=3D"left" class=3D"=
" style=3D"width:568px;" ><![endif]--><div class=3D"mj-column-per-100 mj-ou=
tlook-group-fix" style=3D"font-size:0;line-height:0;text-align:left;display=
:inline-block;width:100%;direction:ltr;"><!--[if mso | IE]><table border=3D=
"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" ><tr><td styl=
e=3D"align:left;vertical-align:top;width:284px;" ><![endif]--><div class=3D=
"mj-column-per-50 mj-outlook-group-fix" style=3D"font-size:0px;text-align:l=
eft;direction:ltr;display:inline-block;vertical-align:top;width:50%;"><tabl=
e border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" wi=
dth=3D"100%"><tbody><tr><td style=3D"vertical-align:top;padding:0;"><table =
border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" widt=
h=3D"100%"><tbody>   <tr><td align=3D"left" class=3D"rio-spacer" style=3D"f=
ont-size:0px;padding:0;word-break:break-word;"><div style=3D"height:20px;li=
ne-height:20px;">&#8202;</div></td></tr><tr><td align=3D"left" style=3D"fon=
t-size:0px;padding:0;word-break:break-word;"><table cellpadding=3D"0" cells=
pacing=3D"0" border=3D"0" role=3D"presentation"><tr><td class=3D"rio-button=
-cta-primary" style=3D"text-align:center;border-radius:24px;mso-padding-alt=
:6px 16px;mso-border-alt:1px solid #FCD200;background:#FFD916;"><a target=
=3D"_blank" aria-describedby=3D"View or edit order" class=3D"rio-button-pri=
mary" href=3D"https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SO=
UTCDRLG&M=3Durn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&R=3D=
2G4YA82P66LM3&T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss%2Forder-det=
ails%3ForderID%3D113-9615736-3549843%26ref_%3Dpe_125775000_1044873430_fed_v=
eo&H=3DHAPBMGSNHKIXDQEGXXYRZPQSL0MA&ref_=3Dpe_125775000_1044873430_fed_veo"=
 style=3D"border:1px solid #FCD200;background:#FFD916;mso-border-alt:none;c=
olor:#0f1111;text-decoration:none;border-radius:24px;padding:6px 16px;mso-p=
adding-alt:0;display:inline-block;box-shadow:1px 2px 4px rgba(153, 153, 153=
, 0.2);font-size:13px;line-height:18px;white-space:nowrap;text-shadow:0 0 0=
.1px transparent;"><span style=3D"text-decoration: none;">View or edit orde=
r</span></a></td></tr></table></td></tr><tr><td align=3D"left" class=3D"rio=
-spacer" style=3D"font-size:0px;padding:0;word-break:break-word;"><div styl=
e=3D"height:12px;line-height:12px;">&#8202;</div></td></tr></tbody></table>=
</td></tr></tbody></table></div><!--[if mso | IE]></td><td style=3D"align:l=
eft;width:284px;" ><![endif]--><div class=3D"mj-column-per-50 mj-outlook-gr=
oup-fix" style=3D"font-size:0;line-height:0;text-align:left;display:inline-=
block;width:100%;direction:ltr;"><!--[if mso | IE]><table border=3D"0" cell=
padding=3D"0" cellspacing=3D"0" role=3D"presentation" ><tr></tr></table><![=
endif]--></div><!--[if mso | IE]></td></tr></table><![endif]--></div><!--[i=
f mso | IE]></td></tr></table><![endif]--></td></tr></tbody></table></div><=
!--[if mso | IE]></td></tr></table><![endif]--></td></tr><tr><td align=3D"l=
eft" style=3D"font-size:0px;padding:0;word-break:break-word;"><!--[if mso |=
 IE]><table align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"=
0" class=3D"" role=3D"presentation" style=3D"width:568px;" width=3D"568" ><=
tr><td style=3D"line-height:0px;font-size:0px;mso-line-height-rule:exactly;=
"><![endif]--><div style=3D"margin:0px auto;max-width:568px;"><table align=
=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presen=
tation" style=3D"width:100%;"><tbody><tr><td style=3D"direction:ltr;font-si=
ze:0px;padding:0;text-align:left;"><!--[if mso | IE]><table role=3D"present=
ation" border=3D"0" cellpadding=3D"0" cellspacing=3D"0"><tr><td align=3D"le=
ft" class=3D"" style=3D"vertical-align:top;width:568px;" ><![endif]--><div =
class=3D"mj-column-per-100 mj-outlook-group-fix" style=3D"font-size:0px;tex=
t-align:left;direction:ltr;display:inline-block;vertical-align:top;width:10=
0%;"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presen=
tation" width=3D"100%"><tbody><tr><td style=3D"vertical-align:top;padding:0=
;"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presenta=
tion" width=3D"100%"><tbody><tr><td align=3D"left" class=3D"rio-spacer" sty=
le=3D"font-size:0px;padding:0;word-break:break-word;"><div style=3D"height:=
16px;line-height:16px;">&#8202;</div></td></tr><tr><td align=3D"left" style=
=3D"font-size:0px;padding:0;word-break:break-word;"><!--[if mso | IE]><tabl=
e align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" class=
=3D"" role=3D"presentation" style=3D"width:568px;" width=3D"568" ><tr><td s=
tyle=3D"line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![end=
if]--><div style=3D"margin:0px auto;max-width:568px;"><table align=3D"cente=
r" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" s=
tyle=3D"width:100%;"><tbody><tr><td style=3D"direction:ltr;font-size:0px;pa=
dding:0;text-align:left;"><!--[if mso | IE]><table role=3D"presentation" bo=
rder=3D"0" cellpadding=3D"0" cellspacing=3D"0"><tr><td align=3D"left" class=
=3D"" style=3D"width:568px;" ><![endif]--><div class=3D"mj-column-per-100 m=
j-outlook-group-fix" style=3D"font-size:0;line-height:0;text-align:left;dis=
play:inline-block;width:100%;direction:ltr;"><!--[if mso | IE]><table borde=
r=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" ><tr><td =
style=3D"align:left;vertical-align:top;width:142px;" ><![endif]--><div clas=
s=3D"mj-column-per-25 mj-outlook-group-fix" style=3D"font-size:0px;text-ali=
gn:left;direction:ltr;display:inline-block;vertical-align:top;width:25%;"><=
table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation=
" width=3D"100%"><tbody><tr><td style=3D"vertical-align:top;padding:0;paddi=
ng-right:8px;padding-left:0;"><table border=3D"0" cellpadding=3D"0" cellspa=
cing=3D"0" role=3D"presentation" width=3D"100%"><tbody>       <tr><td align=
=3D"left" class=3D"rio-asin-image" style=3D"font-size:0px;padding:0;word-br=
eak:break-word;"><table style=3D"width: 100%; border-radius: 4px;" class=3D=
"rio-asin-image-9SHHhtsvP2xKQKVwYKxRq2" border=3D"0" cellpadding=3D"0" cell=
spacing=3D"0" role=3D"presentation" width=3D"100%"><tbody><tr><td class=3D"=
productImageTd" style=3D"background-image:linear-gradient(rgba(15, 17, 17, =
0.03), rgba(15, 17, 17, 0.03));border-radius:4px;position:relative;width:10=
0%;height:64px;vertical-align:middle;text-align:center;padding:8px;"><a tar=
get=3D"_blank" href=3D"https://www.amazon.com/gp/f.html?C=3D3E92MSAD2LHAU&K=
=3D1NG4SOUTCDRLG&M=3Durn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310=
p0na&R=3D1QO9SFAPUTA16&T=3DC&U=3D%2Fdp%2FB079ZV4V3C%3Fref_%3Dpe_125775000_1=
044873430_fed_asin_title&H=3DWIMANNP8LF8RJQO50T5NBNE0LD0A&ref_=3Dpe_1257750=
00_1044873430_fed_asin_title" style=3D"background-color:transparent;display=
:inline-block;"><img style=3D"width:100%;height:auto;max-height:64px;max-wi=
dth:64px;margin:auto;display:block;" class=3D"productImage" width=3D"122" s=
rc=3D"https://m.media-amazon.com/images/I/71ORqgJajrL.SS90_.jpg" alt=3D"Ama=
zon Basics Stapler with 1000 Staples, Office Stapler, 25 Sheet Capacity, No=
n-Slip, Black"></a></td></tr></tbody></table></td></tr></tbody></table></td=
></tr></tbody></table></div><!--[if mso | IE]></td><td style=3D"align:left;=
vertical-align:top;width:426px;" ><![endif]--><div class=3D"mj-column-per-7=
5 mj-outlook-group-fix" style=3D"font-size:0px;text-align:left;direction:lt=
r;display:inline-block;vertical-align:top;width:75%;"><table border=3D"0" c=
ellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" width=3D"100%"><tb=
ody><tr><td style=3D"vertical-align:top;padding:0;"><table border=3D"0" cel=
lpadding=3D"0" cellspacing=3D"0" role=3D"presentation" width=3D"100%"><tbod=
y><tr><td align=3D"left" style=3D"font-size:0px;padding:0;word-break:break-=
word;"><div style=3D"font-family:Ember,'Amazon Ember',Arial,sans-serif;font=
-size:15px;font-weight:400;line-height:21px;text-align:left;color:#0F1111;"=
><span class=3D"rio-text rio-text-548"><a href=3D"https://www.amazon.com/gp=
/f.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Durn:rtn:msg:202503241354076=
f0c20a445c047ccb39cd7b48310p0na&R=3D3JGZOL9XEVAGF&T=3DC&U=3D%2Fdp%2FB079ZV4=
V3C%3Fref_%3Dpe_125775000_1044873430_fed_asin_title&H=3DWBNYTGXAKGXXRZGFINE=
QDRAJPQCA&ref_=3Dpe_125775000_1044873430_fed_asin_title" target=3D"_blank" =
style=3D"color: #0F1111;">Amazon Basics Stapler with 1000 S...</a></span></=
div></td></tr>   <tr><td align=3D"left" class=3D"rio-spacer" style=3D"font-=
size:0px;padding:0;word-break:break-word;"><div style=3D"height:4px;line-he=
ight:4px;">&#8202;</div></td></tr><tr><td align=3D"left" style=3D"font-size=
:0px;padding:0;word-break:break-word;"><div style=3D"font-family:Ember,'Ama=
zon Ember',Arial,sans-serif;font-size:13px;font-weight:400;line-height:18px=
;text-align:left;color:#565959;"><span class=3D"rio-text rio-text-551">Quan=
tity: 1</span></div></td></tr> <tr><td align=3D"left" class=3D"rio-spacer" =
style=3D"font-size:0px;padding:0;word-break:break-word;"><div style=3D"heig=
ht:4px;line-height:4px;">&#8202;</div></td></tr><tr><td align=3D"left" styl=
e=3D"font-size:0px;padding:0;word-break:break-word;"><div style=3D"font-fam=
ily:Ember,'Amazon Ember',Arial,sans-serif;font-size:18px;font-weight:400;li=
ne-height:22px;text-align:left;color:#0F1111;"><span class=3D"rio-text rio-=
text-552">  <span role=3D"region" aria-label=3D"{amount=3D6.13, currencyCod=
e=3D{smallestAmount=3D0.01, code=3DUSD}}" style=3D"font-size: 18px; font-we=
ight: 400; vertical-align: baseline;"><!-- MSO-specific style for Outlook -=
-><!--[if mso]><table cellpadding=3D"0" cellspacing=3D"0" border=3D"0" ><tr=
> <td style=3D"font-size: 18px; vertical-align: top; padding: 0;"><sup styl=
e=3D"position: relative; top: 2px;">$</sup></td> <td style=3D"font-size: 18=
px; font-weight: 400; vertical-align: middle; padding: 0;"><span style=3D"d=
isplay: inline-block;">6</span></td>  <td style=3D"font-size: 18px; vertica=
l-align: top; padding: 0;"><sup style=3D"position: relative; top: 2px;">13<=
/sup></td></tr></table><![endif]--><!-- Non-MSO rendering for other email c=
lients --><!--[if !mso]><!--><sup style=3D"font-size: 10px; position: relat=
ive; top: 2px;">$</sup>6<sup style=3D"font-size: 10px; position: relative; =
top: 2px;">13</sup><!--<![endif]--> </span></span></div></td></tr></tbody><=
/table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table>=
<![endif]--></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr=
></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td=
></tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]></t=
d></tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE=
]></td></tr></table><![endif]--></td></tr></tbody></table></td></tr></tbody=
></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></=
tbody></table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></=
tr><tr><td align=3D"left" class=3D"rio-spacer" style=3D"font-size:0px;paddi=
ng:0;word-break:break-word;"><div style=3D"height:12px;line-height:12px;">&=
#8202;</div></td></tr><tr><td align=3D"left" style=3D"font-size:0px;padding=
:0;word-break:break-word;"><table width=3D"100%" role=3D"presentation"><tr>=
<td style=3D"width:100%;height:1px;padding-top:0px;padding-bottom:0px;paddi=
ng-left:0px;padding-right:0px;"><p style=3D"border-top:solid 1px #BBBFBF;fo=
nt-size:1px;margin:0px auto;width:100%;"></p><!--[if mso | IE]><table align=
=3D"left" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=3D"border-=
top:solid 1px #BBBFBF;font-size:1px;margin:0px auto;width:568px;" role=3D"p=
resentation" width=3D"568px" ><tr><td style=3D"height:0;line-height:0;"> &n=
bsp;
</td></tr></table><![endif]--></td></tr></table></td></tr><tr><td align=3D"=
left" style=3D"font-size:0px;padding:0;word-break:break-word;"><!--[if mso =
| IE]><table align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D=
"0" class=3D"" role=3D"presentation" style=3D"width:568px;" width=3D"568" >=
<tr><td style=3D"line-height:0px;font-size:0px;mso-line-height-rule:exactly=
;"><![endif]--><div style=3D"margin:0px auto;max-width:568px;"><table align=
=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presen=
tation" style=3D"width:100%;"><tbody><tr><td style=3D"direction:ltr;font-si=
ze:0px;padding:0;text-align:left;"><!--[if mso | IE]><table role=3D"present=
ation" border=3D"0" cellpadding=3D"0" cellspacing=3D"0"><tr><td align=3D"le=
ft" class=3D"" style=3D"vertical-align:top;width:568px;" ><![endif]--><div =
class=3D"mj-column-per-100 mj-outlook-group-fix" style=3D"font-size:0px;tex=
t-align:left;direction:ltr;display:inline-block;vertical-align:top;width:10=
0%;"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presen=
tation" width=3D"100%"><tbody><tr><td style=3D"vertical-align:top;padding:0=
;"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presenta=
tion" width=3D"100%"><tbody><tr><td align=3D"left" class=3D"rio-spacer" sty=
le=3D"font-size:0px;padding:0;word-break:break-word;"><div style=3D"height:=
12px;line-height:12px;">&#8202;</div></td></tr><tr><td align=3D"left" style=
=3D"font-size:0px;padding:0;word-break:break-word;"><!--[if mso | IE]><tabl=
e align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" class=
=3D"" role=3D"presentation" style=3D"width:568px;" width=3D"568" ><tr><td s=
tyle=3D"line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![end=
if]--><div style=3D"margin:0px auto;max-width:568px;"><table align=3D"cente=
r" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" s=
tyle=3D"width:100%;"><tbody><tr><td style=3D"direction:ltr;font-size:0px;pa=
dding:0;text-align:left;"><!--[if mso | IE]><table role=3D"presentation" bo=
rder=3D"0" cellpadding=3D"0" cellspacing=3D"0"><tr><td align=3D"left" class=
=3D"" style=3D"vertical-align:top;width:568px;" ><![endif]--><div class=3D"=
mj-column-per-100 mj-outlook-group-fix" style=3D"font-size:0px;text-align:l=
eft;direction:ltr;display:inline-block;vertical-align:top;width:100%;"><tab=
le border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" w=
idth=3D"100%"><tbody><tr><td style=3D"vertical-align:top;padding:0;"><table=
 border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" wid=
th=3D"100%"><tbody><tr><td align=3D"left" style=3D"font-size:0px;padding:0;=
word-break:break-word;"><table cellpadding=3D"0" cellspacing=3D"0" width=3D=
"100%" border=3D"0" style=3D"color:#000000;font-family:Ember,'Amazon Ember'=
,Arial,sans-serif;font-size:15px;line-height:22px;table-layout:auto;width:1=
00%;border:none;"><tr><mj-raw></mj-raw></td><td align=3D"left" style=3D"wid=
th: 50%; padding-right: 30px; font-size: 14px;">Total</td><td align=3D"righ=
t" style=3D"width: 50%; font-size: 14px; font-weight: bold;"><mj-raw></mj-r=
aw><mj-raw> </mj-raw>  $6.76<mj-raw></mj-raw></td></tr></table></td></tr></=
tbody></table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr><=
/table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td><=
/tr></table><![endif]--></td></tr></tbody></table></td></tr></tbody></table=
></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr></tbody></=
table></div><!--[if mso | IE]></td></tr></table><![endif]--></td></tr><tr><=
td align=3D"left" class=3D"rio-spacer" style=3D"font-size:0px;padding:0;wor=
d-break:break-word;"><div style=3D"height:12px;line-height:12px;">&#8202;</=
div></td></tr><tr><td align=3D"left" style=3D"font-size:0px;padding:0;word-=
break:break-word;"><table width=3D"100%" role=3D"presentation"><tr><td styl=
e=3D"width:100%;height:1px;padding-top:0px;padding-bottom:0px;padding-left:=
0px;padding-right:0px;"><p style=3D"border-top:solid 1px #BBBFBF;font-size:=
1px;margin:0px auto;width:100%;"></p><!--[if mso | IE]><table align=3D"left=
" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=3D"border-top:soli=
d 1px #BBBFBF;font-size:1px;margin:0px auto;width:568px;" role=3D"presentat=
ion" width=3D"568px" ><tr><td style=3D"height:0;line-height:0;"> &nbsp;
</td></tr></table><![endif]--></td></tr></table></td></tr></tbody></table><=
/td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![endif=
]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table></t=
d></tr><![endif]--> <!--[if mso | IE]></table><![endif]--></td></tr></tbody=
></table></div><!--[if mso | IE]></td></tr></table></td></tr><![endif]--> <=
!--[if mso | IE]></table><![endif]--></td></tr></tbody></table></div><!--[i=
f mso | IE]></td></tr></table><![endif]--><!--[if mso | IE]><table align=3D=
"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" class=3D"rootCont=
ent-outlook" role=3D"presentation" style=3D"width:600px;" width=3D"600" bgc=
olor=3D"#ffffff" ><tr><td style=3D"line-height:0px;font-size:0px;mso-line-h=
eight-rule:exactly;"><![endif]--><div class=3D"rootContent" style=3D"backgr=
ound:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px;"><ta=
ble align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=
=3D"presentation" style=3D"background:#ffffff;background-color:#ffffff;widt=
h:100%;"><tbody><tr><td style=3D"direction:ltr;font-size:0px;padding:4px 8p=
x 4px 8px;text-align:left;"><!--[if mso | IE]><table role=3D"presentation" =
border=3D"0" cellpadding=3D"0" cellspacing=3D"0"><![endif]--><!--[if mso | =
IE]><tr><td align=3D"left" class=3D"sonar-asin-grid-hve-outlook sonar-asin-=
grid-hve-v1-outlook" width=3D"600px" ><table align=3D"center" border=3D"0" =
cellpadding=3D"0" cellspacing=3D"0" class=3D"rio-card-outlook" role=3D"pres=
entation" style=3D"width:584px;" width=3D"584" bgcolor=3D"#ffffff" ><tr><td=
 style=3D"line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![e=
ndif]--><div class=3D"rio-card" style=3D"background:#ffffff;background-colo=
r:#ffffff;margin:0px auto;border-radius:4px;max-width:584px;"><table align=
=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presen=
tation" style=3D"background:#ffffff;background-color:#ffffff;width:100%;bor=
der-radius:4px;"><tbody><tr><td style=3D"direction:ltr;font-size:0px;paddin=
g:4px 8px 4px 8px;text-align:left;"><!--[if mso | IE]><table role=3D"presen=
tation" border=3D"0" cellpadding=3D"0" cellspacing=3D"0"><tr><td align=3D"l=
eft" class=3D"" width=3D"584px" ><![endif]-->  <table cellpadding=3D"0" cel=
lspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;font-fami=
ly:Ember,'Amazon Ember',Arial,sans-serif;font-size:15px;line-height:22px;ta=
ble-layout:auto;width:100%;border:none;"><tr><td width=3D"65%"><div style=
=3D"font-family:Ember,'Amazon Ember',Arial,sans-serif;font-size:15px;line-h=
eight:1;text-align:left;color:#000000;"><h2 style=3D"margin:0;padding:0;fon=
t-family:Ember,'Amazon Ember',Arial,sans-serif;font-weight:700;font-size:18=
px;line-height:22px;color:#0F1111;" class=3D"rio-header rio-header-187">Kee=
p shopping for</h2></div></td></tr></table><div style=3D"height:8px;line-he=
ight:8px;">&#8202;</div><!--[if mso | IE]></td></tr><tr><td align=3D"left" =
class=3D"" width=3D"584px" ><![endif]--><table cellpadding=3D"0" cellspacin=
g=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;font-family:Embe=
r,'Amazon Ember',Arial,sans-serif;font-size:15px;line-height:22px;table-lay=
out:auto;width:100%;border:none;"><tr><td valign=3D"top" width=3D"32%" styl=
e=3D"">  <table role=3D"presentation" style=3D"table-layout:fixed;width:100=
%;max-width:100%;background-color:#f7f7f7;border-radius:8px;" class=3D"asin=
-container"><tr><td style=3D"padding:0px;"><table role=3D"presentation" cla=
ss=3D"rio-asin-container-image" width=3D"100%"><tr><td align=3D"center"><a =
href=3D"https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRL=
G&M=3Durn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&R=3DXHXAKS=
NDZ1HK&T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB0DH37QQZN%2=
F%3Fref_%3Dpe_125775000_1044873430_AGH3Col0400IMG_2p_0_lm&H=3DJTXBBZMB4RTT8=
VJGGN4GRQZ1DNCA&ref_=3Dpe_125775000_1044873430_AGH3Col0400IMG_2p_0_lm" targ=
et=3D"_blank"><img src=3D"https://m.media-amazon.com/images/I/410f7cSGbdL._=
SR276,276_.jpg" alt=3D"Universal Convertible Car Seat Cover - Backseat Shad=
e &amp; Sun Shade Visor Extender for Baby &amp; Toddler - Rear &amp; Forwar=
d Facing" align=3D"center" width=3D"138" height=3D"138" style=3D"width: 100=
%;height: auto;max-width:138px;max-height:138px;"></a></td></tr></table><di=
v style=3D"padding:4px;"> <table role=3D"presentation" border=3D"0" cellpad=
ding=3D"0" cellspacing=3D"0" style=3D"padding-bottom:4px"><tbody><tr><td><s=
pan class=3D"productHvePrice" style=3D"font-size:13px;font-weight:400;line-=
height:16px;color:#0F1111;direction:ltr !important;">$28.99 </span></td></t=
r></tbody></table><div style=3D"font-family:Ember,'Amazon Ember',Arial,sans=
-serif;font-size:15px;font-weight:400;line-height:20px;text-align:left;colo=
r:#0F1111;"><span class=3D"rio-text rio-text-555"><div style=3D"width:174px=
;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;"=
>Universal Convertible Car Seat...</div></span></div></div></td></tr></tabl=
e></td><td width=3D"2%"><div>&nbsp;</div></td>  <td valign=3D"top" width=3D=
"32%" style=3D"">  <table role=3D"presentation" style=3D"table-layout:fixed=
;width:100%;max-width:100%;background-color:#f7f7f7;border-radius:8px;" cla=
ss=3D"asin-container"><tr><td style=3D"padding:0px;"><table role=3D"present=
ation" class=3D"rio-asin-container-image" width=3D"100%"><tr><td align=3D"c=
enter"><a href=3D"https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1N=
G4SOUTCDRLG&M=3Durn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&=
R=3D1PAIVOLKQQNBS&T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB=
00ZOKJVAG%2F%3Fref_%3Dpe_125775000_1044873430_AGH3Col0401IMG_2p_1_lm&H=3D8R=
2AEWTJAJOQJLIKPVB52WZKL8YA&ref_=3Dpe_125775000_1044873430_AGH3Col0401IMG_2p=
_1_lm" target=3D"_blank"><img src=3D"https://m.media-amazon.com/images/I/51=
AlBYasFZL._SR276,276_.jpg" alt=3D"kinder Fluff Car Window Shade (4Pack)-The=
 Only Certified Car Window Sun Shade for Baby Proven to Block 99.95% UVR - =
Mom&#x27;s Choice Gold Award - Car Seat Sun Protection - Standard" align=3D=
"center" width=3D"138" height=3D"138" style=3D"width: 100%;height: auto;max=
-width:138px;max-height:138px;"></a></td></tr></table><div style=3D"padding=
:4px;"> <table role=3D"presentation" border=3D"0" cellpadding=3D"0" cellspa=
cing=3D"0" style=3D"padding-bottom:4px"><tbody><tr><td><span class=3D"produ=
ctHvePrice" style=3D"font-size:13px;font-weight:400;line-height:16px;color:=
#0F1111;direction:ltr !important;">$14.95 </span></td></tr></tbody></table>=
<div style=3D"font-family:Ember,'Amazon Ember',Arial,sans-serif;font-size:1=
5px;font-weight:400;line-height:20px;text-align:left;color:#0F1111;"><span =
class=3D"rio-text rio-text-555"><div style=3D"width:174px;overflow:hidden;t=
ext-overflow:ellipsis;white-space:nowrap;max-width:100%;">kinder Fluff Car =
Window Shade...</div></span></div></div></td></tr></table></td><td width=3D=
"2%"><div>&nbsp;</div></td>  <td valign=3D"top" width=3D"32%" style=3D"">  =
<table role=3D"presentation" style=3D"table-layout:fixed;width:100%;max-wid=
th:100%;background-color:#f7f7f7;border-radius:8px;" class=3D"asin-containe=
r"><tr><td style=3D"padding:0px;"><table role=3D"presentation" class=3D"rio=
-asin-container-image" width=3D"100%"><tr><td align=3D"center"><a href=3D"h=
ttps://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Durn=
:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&R=3D2FHYUYF2VUYZ9&T=
=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB093296RCV%2F%3Fref_=
%3Dpe_125775000_1044873430_AGH3Col0402IMG_2p_2_lm&H=3DQQWLLM60X6LLHSRDFGSXG=
SRAFI0A&ref_=3Dpe_125775000_1044873430_AGH3Col0402IMG_2p_2_lm" target=3D"_b=
lank"><img src=3D"https://m.media-amazon.com/images/I/41yK6TSkWZL._SR276,27=
6_.jpg" alt=3D"Nightcap The Original Drink Cover Scrunchie, 2 Pack =E2=80=
=93 As Seen On Shark Tank And TikTok - Reusable - Wear On Wrist Or In Hair,=
 Prevent Drink Spiking - Sanitary Pocket Keeps Cover Clean =E2=80=93 Black"=
 align=3D"center" width=3D"138" height=3D"138" style=3D"width: 100%;height:=
 auto;max-width:138px;max-height:138px;"></a></td></tr></table><div style=
=3D"padding:4px;"> <table role=3D"presentation" border=3D"0" cellpadding=3D=
"0" cellspacing=3D"0" style=3D"padding-bottom:4px"><tbody><tr><td><span cla=
ss=3D"productHveDiscount" style=3D"font-weight:400;font-size:13px;line-heig=
ht:16px;color:#CC0C39;display:inline-block;margin-right:4px;">-24% </span><=
span class=3D"productHvePrice" style=3D"font-size:13px;font-weight:400;line=
-height:16px;color:#0F1111;direction:ltr !important;">$18.99 </span></td></=
tr></tbody></table><div style=3D"font-family:Ember,'Amazon Ember',Arial,san=
s-serif;font-size:15px;font-weight:400;line-height:20px;text-align:left;col=
or:#0F1111;"><span class=3D"rio-text rio-text-555"><div style=3D"width:174p=
x;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;=
">Nightcap The Original Drink...</div></span></div></div></td></tr></table>=
</td>  </tr></table><!--[if mso | IE]></td></tr></table><![endif]--></td></=
tr></tbody></table></div><!--[if mso | IE]></td></tr></table></td></tr><![e=
ndif]-->        <!--[if mso | IE]></table><![endif]--></td></tr></tbody></t=
able></div><!--[if mso | IE]></td></tr></table><![endif]--><!--[if mso | IE=
]><table align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" =
class=3D"rootContent-outlook" role=3D"presentation" style=3D"width:600px;" =
width=3D"600" bgcolor=3D"#ffffff" ><tr><td style=3D"line-height:0px;font-si=
ze:0px;mso-line-height-rule:exactly;"><![endif]--><div class=3D"rootContent=
" style=3D"background:#ffffff;background-color:#ffffff;margin:0px auto;max-=
width:600px;"><table align=3D"center" border=3D"0" cellpadding=3D"0" cellsp=
acing=3D"0" role=3D"presentation" style=3D"background:#ffffff;background-co=
lor:#ffffff;width:100%;"><tbody><tr><td style=3D"direction:ltr;font-size:0p=
x;padding:4px 0px 0px 0px;text-align:left;"><!--[if mso | IE]><table role=
=3D"presentation" border=3D"0" cellpadding=3D"0" cellspacing=3D"0"><![endif=
]--> <!--[if mso | IE]><tr><td align=3D"left" class=3D"sonar-footer-outlook=
 sonar-footer-v1-outlook" width=3D"600px" ><table align=3D"center" border=
=3D"0" cellpadding=3D"0" cellspacing=3D"0" class=3D"footerCard-outlook" rol=
e=3D"presentation" style=3D"width:600px;" width=3D"600" bgcolor=3D"#F0F2F2"=
 ><tr><td style=3D"line-height:0px;font-size:0px;mso-line-height-rule:exact=
ly;"><![endif]--><div class=3D"footerCard" style=3D"background:#F0F2F2;back=
ground-color:#F0F2F2;margin:0px auto;max-width:600px;"><table align=3D"cent=
er" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" =
style=3D"background:#F0F2F2;background-color:#F0F2F2;width:100%;"><tbody><t=
r><td style=3D"direction:ltr;font-size:0px;padding:0;text-align:left;"><!--=
[if mso | IE]><table role=3D"presentation" border=3D"0" cellpadding=3D"0" c=
ellspacing=3D"0"><tr><td align=3D"left" class=3D"footerText-outlook" width=
=3D"600px" ><table align=3D"center" border=3D"0" cellpadding=3D"0" cellspac=
ing=3D"0" class=3D"footerText-outlook" role=3D"presentation" style=3D"width=
:600px;" width=3D"600" ><tr><td style=3D"line-height:0px;font-size:0px;mso-=
line-height-rule:exactly;"><![endif]--><div class=3D"footerText" style=3D"m=
argin:0px auto;max-width:600px;"><table align=3D"center" border=3D"0" cellp=
adding=3D"0" cellspacing=3D"0" role=3D"presentation" style=3D"width:100%;">=
<tbody><tr><td style=3D"direction:ltr;font-size:0px;padding:20px 16px 0;tex=
t-align:left;"><!--[if mso | IE]><table role=3D"presentation" border=3D"0" =
cellpadding=3D"0" cellspacing=3D"0"><tr><td align=3D"left" class=3D"" style=
=3D"vertical-align:top;width:568px;" ><![endif]--><div class=3D"mj-column-p=
er-100 mj-outlook-group-fix" style=3D"font-size:0px;text-align:left;directi=
on:ltr;display:inline-block;vertical-align:top;width:100%;"><table border=
=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" width=3D"1=
00%"><tbody><tr><td style=3D"vertical-align:top;padding:0;"><table border=
=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" width=3D"1=
00%"><tbody><tr><td align=3D"left" style=3D"font-size:0px;padding:0;word-br=
eak:break-word;"><div style=3D"font-family:Ember,'Amazon Ember',Arial,sans-=
serif;font-size:14px;font-weight:400;line-height:20px;text-align:left;color=
:#494D4D;">=C2=A92025 Amazon.com, Inc. or its affiliates. Amazon and all re=
lated marks are trademarks of Amazon.com, Inc. or its affiliates, Amazon.co=
m, Inc. 410 Terry Avenue N., Seattle, WA 98109.</div></td></tr></tbody></ta=
ble></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table><![=
endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></tabl=
e></td></tr><![endif]-->  <!--[if mso | IE]><tr><td align=3D"left" class=3D=
"footerText-outlook" width=3D"600px" ><table align=3D"center" border=3D"0" =
cellpadding=3D"0" cellspacing=3D"0" class=3D"footerText-outlook" role=3D"pr=
esentation" style=3D"width:600px;" width=3D"600" ><tr><td style=3D"line-hei=
ght:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]--><div class=
=3D"footerText" style=3D"margin:0px auto;max-width:600px;"><table align=3D"=
center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentati=
on" style=3D"width:100%;"><tbody><tr><td style=3D"direction:ltr;font-size:0=
px;padding:20px 16px 0;text-align:left;"><!--[if mso | IE]><table role=3D"p=
resentation" border=3D"0" cellpadding=3D"0" cellspacing=3D"0"><tr><td align=
=3D"left" class=3D"" style=3D"vertical-align:top;width:568px;" ><![endif]--=
><div class=3D"mj-column-per-100 mj-outlook-group-fix" style=3D"font-size:0=
px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;wi=
dth:100%;"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"=
presentation" width=3D"100%"><tbody><tr><td style=3D"vertical-align:top;pad=
ding:0;"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"pr=
esentation" width=3D"100%"><tbody><tr><td align=3D"left" style=3D"font-size=
:0px;padding:0;word-break:break-word;"><div style=3D"font-family:Ember,'Ama=
zon Ember',Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px=
;text-align:left;color:#494D4D;"><p>By placing your order, you agree to Ama=
zon.com=E2=80=99s <a href=3D"https://www.amazon.com/gp/r.html?C=3D3E92MSAD2=
LHAU&K=3D1NG4SOUTCDRLG&M=3Durn:rtn:msg:202503241354076f0c20a445c047ccb39cd7=
b48310p0na&R=3D3K3ETTJRKYY7M&T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2F=
help%2Fcustomer%2Fdisplay.html%3Fie%3DUTF8%26nodeId%3D468496%26ref_%3Dpe_12=
5775000_1044873430_fed_roclt_default_policy&H=3D3WZANOYMAAKZNIJGVDZ6A4QQ9IA=
A&ref_=3Dpe_125775000_1044873430_fed_roclt_default_policy" rel=3D"nofollow"=
>Privacy Notice</a> and <a href=3D"https://www.amazon.com/gp/r.html?C=3D3E9=
2MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Durn:rtn:msg:202503241354076f0c20a445c047cc=
b39cd7b48310p0na&R=3D31MYR46CF9COX&T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2=
Fgp%2Fhelp%2Fcustomer%2Fdisplay.html%3Fie%3DUTF8%26nodeId%3D508088%26ref_%3=
Dpe_125775000_1044873430_fed_roclt_default_policy&H=3D53APDUCXI1P6ARYWU2YQI=
JD6WFEA&ref_=3Dpe_125775000_1044873430_fed_roclt_default_policy" rel=3D"nof=
ollow"> Conditions of Use</a>. Unless otherwise noted, items sold by Amazon=
.com are subject to sales tax in select states in accordance with the appli=
cable laws of that state. If your order contains one or more items from a s=
eller other than Amazon.com, it may be subject to state and local sales tax=
, depending upon the seller's business policies and the location of their o=
perations. Learn more about <a href=3D"https://www.amazon.com/gp/r.html?C=
=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Durn:rtn:msg:202503241354076f0c20a445=
c047ccb39cd7b48310p0na&R=3DMY7CD5DVOOPC&T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.=
com%2Fgp%2Fhelp%2Fcustomer%2Fdisplay.html%3Fie%3DUTF8%26nodeId%3D202029700%=
26ref_%3Dpe_125775000_1044873430_fed_roclt_default_policy&H=3DYTUXPGZAARVQU=
TGZKFB3GSJV3ICA&ref_=3Dpe_125775000_1044873430_fed_roclt_default_policy" re=
l=3D"nofollow">tax and seller information</a>.</p>
<p>Items in this order may be subject to California's Electronic Waste Recy=
cling Act. If any items in this order are subject to that Act, the seller o=
f that item has elected to pay any fees due on your behalf.</p></div></td><=
/tr></tbody></table></td></tr></tbody></table></div><!--[if mso | IE]></td>=
</tr></table><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]>=
</td></tr></table></td></tr><![endif]--> <!--[if mso | IE]><tr><td align=3D=
"left" class=3D"" width=3D"600px" ><table align=3D"center" border=3D"0" cel=
lpadding=3D"0" cellspacing=3D"0" class=3D"" role=3D"presentation" style=3D"=
width:600px;" width=3D"600" ><tr><td style=3D"line-height:0px;font-size:0px=
;mso-line-height-rule:exactly;"><![endif]--><div style=3D"margin:0px auto;m=
ax-width:600px;"><table align=3D"center" border=3D"0" cellpadding=3D"0" cel=
lspacing=3D"0" role=3D"presentation" style=3D"width:100%;"><tbody><tr><td s=
tyle=3D"direction:ltr;font-size:0px;padding:14px 16px 4px 0;text-align:left=
;"><!--[if mso | IE]><table role=3D"presentation" border=3D"0" cellpadding=
=3D"0" cellspacing=3D"0"><tr><td align=3D"left" class=3D"" style=3D"vertica=
l-align:top;width:584px;" ><![endif]--><div class=3D"mj-column-per-100 mj-o=
utlook-group-fix" style=3D"font-size:0px;text-align:left;direction:ltr;disp=
lay:inline-block;vertical-align:top;width:100%;"><table border=3D"0" cellpa=
dding=3D"0" cellspacing=3D"0" role=3D"presentation" width=3D"100%"><tbody><=
tr><td style=3D"vertical-align:top;padding:0;"><table border=3D"0" cellpadd=
ing=3D"0" cellspacing=3D"0" role=3D"presentation" width=3D"100%"><tbody><ta=
ble class=3D"lightFooterImg" style=3D"height:43px;width:86px;" data-sonar-r=
ole=3D"footer"><tr><td><img src=3D"https://m.media-amazon.com/images/G/01/o=
utbound/OutboundTemplates/Smile_Logo_Light._BG240,242,242_.png" alt=3D"Amaz=
on.com" height=3D"43" width=3D"86" align=3D"left"></td></tr></table><!--[if=
 !mso]><!--><table class=3D"darkFooterImg" style=3D"height:43px;width:86px;=
display:none;"><tr><td><img src=3D"https://m.media-amazon.com/images/G/01/o=
utbound/OutboundTemplates/Smile_Logo_Dark.png" alt=3D"Amazon.com" height=3D=
"43" width=3D"86" align=3D"left"></td></tr></table><!--<![endif]--></tbody>=
</table></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></table=
><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr></=
table></td></tr></table><![endif]--></td></tr></tbody></table></div><!--[if=
 mso | IE]></td></tr></table></td></tr><![endif]--> <!--[if mso | IE]></tab=
le><![endif]--></td></tr></tbody></table></div><!--[if mso | IE]></td></tr>=
</table><![endif]--></div><img width=3D"1" height=3D"1" src=3D"https://www.=
amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Durn:rtn:msg:20=
2503241354076f0c20a445c047ccb39cd7b48310p0na&R=3D3N4HP2JVSY4XF&T=3DE&U=3Dht=
tps%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FG%2F01%2Fnav%2Ftrans=
p.gif&H=3DMTZCAGARTUZQOKFXA2GNNC4QVMIA&ref_=3Dpe_125775000_1044873430_open"=
 /></body></html>
------=_Part_3028565_434066593.1742824447991--`;
