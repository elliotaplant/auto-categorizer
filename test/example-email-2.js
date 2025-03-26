export const EXAMPLE_EMAIL_2 = `Received: from mail-oo1-xc2b.google.com (2607:f8b0:4864:20::c2b)
        by cloudflare-email.net (unknown) id ifi9KTKRCArq
        for <amazon-categorizer@elliotplant.com>; Wed, 26 Mar 2025 18:44:08 +0000
ARC-Seal: i=1; a=rsa-sha256; s=cf2024-1; d=cloudflare-email.net; cv=none;
	b=I3jhduLSf2tVRzGqczNTG9dux0KIOcK1f4+Kew0UvAbLyn6sQQw1h8DZdECpKmJy9lqpPFqyv
	nbn5QxYItdjfj8oNWq/4Ls+WBjlVf3FlKzfrYtPW+miybIwhwlXx6pfCcpHipZ1OldWqHbhV6Pi
	Tjh3s7A5qtyIa+DvnJJQQ+hPj1uEawMEtnysZ40E05EC0dlT+bTYyNBiP/b3EHhT/gtR8pny4it
	V4HcWwYMvLssKWChNQNkme6zUyyvO1Ex2eSDn/ikullX21f0kYleln7aZtKeYcNO3dSk17qfbwG
	q3pWj3Q3mKyBL8mNU5iW+iWdraItP3oXdOb6dJYCExSg==;
ARC-Message-Signature: i=1; a=rsa-sha256; s=cf2024-1; d=cloudflare-email.net; c=relaxed/relaxed;
	h=To:Subject:Date:From:In-Reply-To:References:reply-to:cc:resent-date
	:resent-from:resent-to:resent-cc:list-id:list-help:list-unsubscribe
	:list-subscribe:list-post:list-owner:list-archive; t=1743014649;
	x=1743619449; bh=jvt/mnAQxoXW8UvcIh+D7h3yNYwvkdwh46E0QcDfBew=; b=YF/TXYyWM6
	d/evBcCJ4R5R5U7Sh4BKv9VYhum4mo1qya+dSrim5iKpZHmSFs+vA7wq/yI8KNGdvD9mnBqr+iO
	BA3y5lMxdnIFnwPT7Ei+6K7VPeuE3umb5KxlI7jPkMS5THW96XhW5qYJrMqjoMKBl2cu+B0YiX/
	PSO7wNtOAm4x9y9MvXgUVEpJiSD+xOG+sWElJ52zkdVbWU3lvDjY9ZP/PLpu+JYGSRMsekNre15
	3yTZhfYJ11PNBWMZit0cd2pOg7Ywcby9eA5AtPM51lezLQZLl8JLN+SVc6kDomixKp7VcvL0C26
	AxskOS54NAUpAN3LS+tjYjPrMgjoUnmg==;
ARC-Authentication-Results: i=1; mx.cloudflare.net;
	dkim=pass header.d=gmail.com header.s=20230601 header.b=SYrKD6iH;
	dmarc=pass header.from=gmail.com policy.dmarc=none;
	spf=none (mx.cloudflare.net: no SPF records found for postmaster@mail-oo1-xc2b.google.com) smtp.helo=mail-oo1-xc2b.google.com;
	spf=pass (mx.cloudflare.net: domain of elliotaplant@gmail.com designates 2607:f8b0:4864:20::c2b as permitted sender) smtp.mailfrom=elliotaplant@gmail.com;
	arc=none smtp.remote-ip=2607:f8b0:4864:20::c2b
Received-SPF: pass (mx.cloudflare.net: domain of elliotaplant@gmail.com designates 2607:f8b0:4864:20::c2b as permitted sender)
	receiver=mx.cloudflare.net; client-ip=2607:f8b0:4864:20::c2b; envelope-from="elliotaplant@gmail.com"; helo=mail-oo1-xc2b.google.com;
Authentication-Results: mx.cloudflare.net;
	dkim=pass header.d=gmail.com header.s=20230601 header.b=SYrKD6iH;
	dmarc=pass header.from=gmail.com policy.dmarc=none;
	spf=none (mx.cloudflare.net: no SPF records found for postmaster@mail-oo1-xc2b.google.com) smtp.helo=mail-oo1-xc2b.google.com;
	spf=pass (mx.cloudflare.net: domain of elliotaplant@gmail.com designates 2607:f8b0:4864:20::c2b as permitted sender) smtp.mailfrom=elliotaplant@gmail.com;
	arc=none smtp.remote-ip=2607:f8b0:4864:20::c2b
X-CF-SpamH-Score: 0
Received: by mail-oo1-xc2b.google.com with SMTP id 006d021491bc7-5fcd61e9bcdso88061eaf.0
        for <amazon-categorizer@elliotplant.com>; Wed, 26 Mar 2025 11:44:08 -0700 (PDT)
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
        d=gmail.com; s=20230601; t=1743014648; x=1743619448; darn=elliotplant.com;
        h=to:subject:message-id:date:from:in-reply-to:references:mime-version
         :from:to:cc:subject:date:message-id:reply-to;
        bh=jvt/mnAQxoXW8UvcIh+D7h3yNYwvkdwh46E0QcDfBew=;
        b=SYrKD6iHPRwObLBrP/cD8cIwmQz06RwyMb3k+Y8YMR2ZxQyOc1hbL0ejA2OZIac49u
         nyZgeHUl9ezb+UqPKxJbbJ4KeNF6HBcspp9xy08IKQiQyDGiFOvHMRhdJNOgyT2T3yKi
         4mP6vqDF/5rTTCWc7kfXbj6nJqG0+tj7sBcdEBj2OkWbgKZbFknGtMQCarLr4P55SAb1
         0Md1v9AmVMhlhPS0Hyx9TTixJkM1V53m1QhM208ucJImn3T3DogSsYrbm9lyIAKPMsNG
         MSm7aq2fuvtImfMHUwnRcmateOIRzgQsSpe33fpQeoxsw6L1GHsQJP05ayzUnBto2U3H
         851w==
X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
        d=1e100.net; s=20230601; t=1743014648; x=1743619448;
        h=to:subject:message-id:date:from:in-reply-to:references:mime-version
         :x-gm-message-state:from:to:cc:subject:date:message-id:reply-to;
        bh=jvt/mnAQxoXW8UvcIh+D7h3yNYwvkdwh46E0QcDfBew=;
        b=fsrwArhS64DS7UjUfAkg/P650wU7NZPfTNsbw3F86Qo0DkVVDaMtUQZyO6xtBnRftX
         qH8SLu4u+bc4EVNm2UKHDPlf6fJ/WBuPgMUl0O5jWgLU6Q/4IK8IqOVkk+6gomeBrsPR
         36t16+Rl7E4t/nU7FLQkoOKIY8QBgvXhzH3X91TII9ZiMLwhBDcVz6h/NxoapU5Cyev+
         jjMDzClymSLTwoQ+cvN6xT9nWU9jRMIiX5K9XFdfVife8YHATL5UzwFQ/ecFquTXVyH5
         6ietSiEKkir6tYDKGo29Di7HEaUeAIkeTxfbvY6oGnY1Nnxjmis0mBPcnCn1dKput4U0
         +m3Q==
X-Gm-Message-State: AOJu0YxIruCFEFC5Y4+KAbq+NjkHSzH4j5xaXF/TTapq04YATwzlI9G+
	7kCheXVtpbSFDAXawKwHS5WujC/cHNJHFP8U2xIrlkLqve50e42EU0yQS/7jsz4mimuz4HtfRme
	zv3DMWSx/8rtN2+LMCfpYyGmUjqYhra5j
X-Gm-Gg: ASbGncuXZ/9BWtp1JllXLnn3/6XJ19dWC40ZZ2vKGKdnvGFcoTD42kGJPl6SXP59wNP
	/4hdS2dgQUxs3jJTYrCOyEspfLJV7WFIemiEpgY9MkCdTD9tMca8ec0We8CMZ8XHntrYDTUR5X6
	DsuAD1Mbp8ooZO1/rK1pAgfE6UuwZPLJ6hOh60MQ==
X-Google-Smtp-Source: AGHT+IEQPPLgbyo8dMfYJaWmdzqHjXZxDmh6fmGLD4JVc0hJA0OE3hXNgRCuAcD8PENi+SKJDow9GjwNMHiAYuaOyHw=
X-Received: by 2002:a05:6820:4586:b0:5fd:b60:ce94 with SMTP id
 006d021491bc7-602785699b7mr484630eaf.2.1743014647521; Wed, 26 Mar 2025
 11:44:07 -0700 (PDT)
MIME-Version: 1.0
References: <01000195c6203e24-672ae33f-75b3-4974-817f-4649dbd82293-000000@email.amazonses.com>
In-Reply-To: <01000195c6203e24-672ae33f-75b3-4974-817f-4649dbd82293-000000@email.amazonses.com>
From: Elliot Plant <elliotaplant@gmail.com>
Date: Wed, 26 Mar 2025 11:43:55 -0700
X-Gm-Features: AQ5f1Jqt8oGKOajGhTsysYt_zkIVmQTy-yoOuf1YogC8nmtAYA4kHHSIdhXjIPc
Message-ID: <CAFo8zPyg9PNrz0z6kww7eVA1aAjAB-iWSswU2Gqz7P23WWOAmg@mail.gmail.com>
Subject: Fwd: Ordered: "BLACK+DECKER 2.5 Cu. Ft..."
To: amazon-categorizer@elliotplant.com
Content-Type: multipart/alternative; boundary="000000000000e76fca0631433822"

--000000000000e76fca0631433822
Content-Type: text/plain; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

---------- Forwarded message ---------
From: Amazon.com <auto-confirm@amazon.com>
Date: Sun, Mar 23, 2025 at 8:09=E2=80=AFPM
Subject: Ordered: "BLACK+DECKER 2.5 Cu. Ft..."
To: <elliotaplant@gmail.com>


Ordered: "BLACK+DECKER 2.5 Cu. Ft..."=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=
=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =
=E2=80=8C   =E2=80=87 =C2=AD=CD=8F
=E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=
=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=
=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C  =
 =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C
=E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=
=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=
=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =
=C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C
=C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=
=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=
=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=
=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F
=E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=
=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=
=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C  =
 =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C
=E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=
=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=
=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =
=C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C
=C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=
=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=
=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=
=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F
=E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=
=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=
=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C  =
 =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C
=E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=
=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=
=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =
=C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C
=C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=
=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=
=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=
=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F
=E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=
=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=
=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C  =
 =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C
=E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=
=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=
=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =
=C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C
=C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=
=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=
=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=
=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F
=E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=
=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=
=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C  =
 =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C
=E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=
=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=
=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =
=C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C
=C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=
=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=
=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=
=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F
=E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=
=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=
=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C  =
 =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C
=E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=
=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=
=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =
=C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C
=C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=
=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD
Your Orders
<https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:20250324030915cb5e9fe645494afa90397e25ed80p0na&R=3DOYWNM7DVO32N&=
T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss%2Forder-history%3Fref_%3D=
pe_125775000_1044873430_TLH0001BT_fed_yo_default&H=3DSDMF7CBLARH5K3F5WV3EHT=
IGT6KA&ref_=3Dpe_125775000_1044873430_TLH0001BT_fed_yo_default>
Your Account
<https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:20250324030915cb5e9fe645494afa90397e25ed80p0na&R=3DA3BH2TE7SMPQ&=
T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fyour-account%3Fref_%3Dpe_125775000=
_1044873430_TLH0002BT_fed_ya_default&H=3DLWG3OKOXVXN0PUSILQGBDALTFFUA&ref_=
=3Dpe_125775000_1044873430_TLH0002BT_fed_ya_default>
Buy Again
<https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:20250324030915cb5e9fe645494afa90397e25ed80p0na&R=3D1X72ZAXIEF530=
&T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fbuyagain%3Fref_%3Dpe_1257750=
00_1044873430_TLH0003BT_fed_bia_default&H=3DIHGEYEDYTEEAAFUP3FEVKW5WLKOA&re=
f_=3Dpe_125775000_1044873430_TLH0003BT_fed_bia_default>
Thanks for your order, Elliot!
Ordered

Shipped

Out for delivery

Delivered

Arriving Tuesday
*Elliot - OAKLAND, CA*
Order # =E2=80=AB113-7730110-9707458
View or edit order
<https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:20250324030915cb5e9fe645494afa90397e25ed80p0na&R=3D24V5IOHSR4AQR=
&T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss%2Forder-details%3ForderI=
D%3D113-7730110-9707458%26ref_%3Dpe_125775000_1044873430_fed_veo&H=3DA72YOX=
JEDRJG5ZDGVAJ05YC8WM8A&ref_=3Dpe_125775000_1044873430_fed_veo>

[image: BLACK+DECKER 2.5 Cu. Ft. Compact Refrigerator, ENERGY STAR
Certified Small Refrigerator, Single Door Mini Fridge with Freezer,
Personal Fridge for Home/Dorm Room, R600a Refrigerant, VCM Stainless Look]
<https://www.amazon.com/gp/f.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:20250324030915cb5e9fe645494afa90397e25ed80p0na&R=3D3ST43RAQBTVAD=
&T=3DC&U=3D%2Fdp%2FB01DZQI700%3Fref_%3Dpe_125775000_1044873430_fed_asin_tit=
le&H=3DWHJQ4VW6AE4PAJP7AAZOJ8OB4GEA&ref_=3Dpe_125775000_1044873430_fed_asin=
_title>
BLACK+DECKER 2.5 Cu. Ft. Compact ...
<https://www.amazon.com/gp/f.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:20250324030915cb5e9fe645494afa90397e25ed80p0na&R=3D3RWSRC6056ONO=
&T=3DC&U=3D%2Fdp%2FB01DZQI700%3Fref_%3Dpe_125775000_1044873430_fed_asin_tit=
le&H=3D8UKZFNHCSR7AZ92DIAAPEEXBJCOA&ref_=3Dpe_125775000_1044873430_fed_asin=
_title>
Quantity: 1
$18999

Total $209.46

Deals related to your purchases
[image: Saline Nose Wipes by Boogie, for Baby & Kids, Face, Hand & Body,
FSA/HSA Eligible, Made with Vitamin E, Aloe, and Natural Saline, Unscented,
30 Count (Pack of 6)]
<https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:20250324030915cb5e9fe645494afa90397e25ed80p0na&R=3D21WJYN3EP2IX&=
T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB017GYO3I2%2F%3Fref=
_%3Dpe_125775000_1044873430_AGH3Col0400IMG_2p_0_lm&H=3DEX62SEDXU5KOJTMJ1TRW=
SUTUOJQA&ref_=3Dpe_125775000_1044873430_AGH3Col0400IMG_2p_0_lm>
-33% $17.95
Saline Nose Wipes by Boogie, for...

[image: Danskin Women's Performance Sleek Pocket Ankle Legging]
<https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:20250324030915cb5e9fe645494afa90397e25ed80p0na&R=3D17H1EBP9ASLRI=
&T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB001RNI880%2F%3Fre=
f_%3Dpe_125775000_1044873430_AGH3Col0401IMG_2p_1_lm&H=3DE7APFBEDAH3VPUFMHGP=
Z77NSWOQA&ref_=3Dpe_125775000_1044873430_AGH3Col0401IMG_2p_1_lm>
-23% $21.68
Danskin Women's Performance...

[image: Marsail Ergonomic PU-Leather Office Chair: 5 Settings Lumbar
Support, Executive Office Chair Height Adjustable with Padded Flip-up Arms,
Executive Desk Chair for Working Study-Black]
<https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:20250324030915cb5e9fe645494afa90397e25ed80p0na&R=3D2U573ZXZ2CY3M=
&T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB0CG9HP7XS%2F%3Fre=
f_%3Dpe_125775000_1044873430_AGH3Col0402IMG_2p_2_lm&H=3DYSBVQ4C0QJBIBWVPJ0Q=
8WPC5OIEA&ref_=3Dpe_125775000_1044873430_AGH3Col0402IMG_2p_2_lm>
-26% $148.05
Marsail Ergonomic PU-Leather...
=C2=A92025 Amazon.com, Inc. or its affiliates. Amazon and all related marks=
 are
trademarks of Amazon.com, Inc. or its affiliates, Amazon.com, Inc. 410
Terry Avenue N., Seattle, WA 98109.

By placing your order, you agree to Amazon.com=E2=80=99s Privacy Notice
<https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:20250324030915cb5e9fe645494afa90397e25ed80p0na&R=3D174IX2T9N0HTJ=
&T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fhelp%2Fcustomer%2Fdisplay.ht=
ml%3Fie%3DUTF8%26nodeId%3D468496%26ref_%3Dpe_125775000_1044873430_fed_roclt=
_default_policy&H=3DATKG9JUATCL3R3VV2ENTLHIXSAUA&ref_=3Dpe_125775000_104487=
3430_fed_roclt_default_policy>
and Conditions of Use
<https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:20250324030915cb5e9fe645494afa90397e25ed80p0na&R=3DTHBJMVWLUL2U&=
T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fhelp%2Fcustomer%2Fdisplay.htm=
l%3Fie%3DUTF8%26nodeId%3D508088%26ref_%3Dpe_125775000_1044873430_fed_roclt_=
default_policy&H=3D1KOYJKLA5ABCBITEP4O2QCDX7ZOA&ref_=3Dpe_125775000_1044873=
430_fed_roclt_default_policy>.
Unless otherwise noted, items sold by Amazon.com are subject to sales tax
in select states in accordance with the applicable laws of that state. If
your order contains one or more items from a seller other than Amazon.com,
it may be subject to state and local sales tax, depending upon the seller's
business policies and the location of their operations. Learn more about ta=
x
and seller information
<https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:20250324030915cb5e9fe645494afa90397e25ed80p0na&R=3D2RV1METE1ZZAA=
&T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fhelp%2Fcustomer%2Fdisplay.ht=
ml%3Fie%3DUTF8%26nodeId%3D202029700%26ref_%3Dpe_125775000_1044873430_fed_ro=
clt_default_policy&H=3DIMTVYTJP5MUXNX8CAK8JUZOPUDQA&ref_=3Dpe_125775000_104=
4873430_fed_roclt_default_policy>
.

Items in this order may be subject to California's Electronic Waste
Recycling Act. If any items in this order are subject to that Act, the
seller of that item has elected to pay any fees due on your behalf.
[image: Amazon.com]
[image: Amazon.com]

--000000000000e76fca0631433822
Content-Type: text/html; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

<div dir=3D"ltr"><br><br><div class=3D"gmail_quote gmail_quote_container"><=
div dir=3D"ltr" class=3D"gmail_attr">---------- Forwarded message ---------=
<br>From: <strong class=3D"gmail_sendername" dir=3D"auto">Amazon.com</stron=
g> <span dir=3D"auto">&lt;<a href=3D"mailto:auto-confirm@amazon.com">auto-c=
onfirm@amazon.com</a>&gt;</span><br>Date: Sun, Mar 23, 2025 at 8:09=E2=80=
=AFPM<br>Subject: Ordered: &quot;BLACK+DECKER 2.5 Cu. Ft...&quot;<br>To:  &=
lt;<a href=3D"mailto:elliotaplant@gmail.com">elliotaplant@gmail.com</a>&gt;=
<br></div><br><br><div class=3D"msg1323047936219179829"><u></u><div class=
=3D"m_1323047936219179829body" style=3D"word-spacing:normal"><img width=3D"=
1" height=3D"1" src=3D"https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&a=
mp;K=3D1NG4SOUTCDRLG&amp;M=3Durn:rtn:msg:20250324030915cb5e9fe645494afa9039=
7e25ed80p0na&amp;R=3DVNKZ3BSVK74L&amp;T=3DO&amp;U=3Dhttps%3A%2F%2Fimages-na=
.ssl-images-amazon.com%2Fimages%2FG%2F01%2Fnav%2Ftransp.gif&amp;H=3DQ8225H4=
ORAVRWJAADZKTXBKSSLSA&amp;ref_=3Dpe_125775000_1044873430_opens"><div style=
=3D"display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px=
;max-width:0px;opacity:0;overflow:hidden">Ordered: &quot;BLACK+DECKER 2.5 C=
u. Ft...&quot;=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=
=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=
=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =
=E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=
=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =
=C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=
=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=
=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=
=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =
=E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=
=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =
=C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=
=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=
=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=
=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =
=E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=
=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =
=C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=
=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=
=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=
=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =
=E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=
=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =
=C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=
=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=
=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=
=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =
=E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=
=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =
=C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=
=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=
=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=
=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =
=E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=
=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =
=C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=
=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=
=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=
=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =
=E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=
=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =
=C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=
=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=
=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=
=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =
=E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=
=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =
=C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=
=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=
=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=
=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =
=E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=
=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =
=C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=
=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=
=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=
=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =
=E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=
=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =
=C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=
=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=
=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=
=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =
=E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=
=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =
=C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=
=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=
=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=
=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =
=E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=
=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =
=C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=
=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=
=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=
=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =
=E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=
=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =
=C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=
=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=
=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=
=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =
=E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD</=
div><div class=3D"m_1323047936219179829body" lang=3D"en" dir=3D"auto"><div =
style=3D"background:#ffffff;background-color:#ffffff;margin:0px auto;max-wi=
dth:600px"><table align=3D"center" border=3D"0" cellpadding=3D"0" cellspaci=
ng=3D"0" role=3D"presentation" style=3D"background:#ffffff;background-color=
:#ffffff;width:100%"><tbody><tr><td style=3D"direction:ltr;font-size:0px;pa=
dding:0px 0px 4px 0px;text-align:left"> <div style=3D"background:#ffffff;ba=
ckground-color:#ffffff;margin:0px auto;border-radius:4px;max-width:600px"><=
table align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" rol=
e=3D"presentation" style=3D"background:#ffffff;background-color:#ffffff;wid=
th:100%;border-radius:4px"><tbody><tr><td style=3D"direction:ltr;font-size:=
0px;padding:0px 0px 0px 0px;text-align:left"><div style=3D"background:#232f=
3e;background-color:#232f3e;margin:0px auto;max-width:600px"><table align=
=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presen=
tation" style=3D"background:#232f3e;background-color:#232f3e;width:100%"><t=
body><tr><td style=3D"direction:ltr;font-size:0px;padding:8px 4px;text-alig=
n:left"><div class=3D"m_1323047936219179829mj-column-per-100" style=3D"font=
-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direc=
tion:ltr"><div class=3D"m_1323047936219179829mj-column-per-100" style=3D"fo=
nt-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-ali=
gn:middle;width:100%"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"=
0" role=3D"presentation" width=3D"100%"><tbody><tr><td style=3D"vertical-al=
ign:middle;padding:0"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"=
0" role=3D"presentation" width=3D"100%"><tbody><tr><td align=3D"center" sty=
le=3D"font-size:0px;padding:0;word-break:break-word"><div style=3D"font-fam=
ily:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:14px;font-weigh=
t:bold;letter-spacing:-.02em;line-height:20px;text-align:center;color:#0000=
00"><u></u>    <u></u><a href=3D"https://www.amazon.com/gp/r.html?C=3D3E92M=
SAD2LHAU&amp;K=3D1NG4SOUTCDRLG&amp;M=3Durn:rtn:msg:20250324030915cb5e9fe645=
494afa90397e25ed80p0na&amp;R=3DOYWNM7DVO32N&amp;T=3DC&amp;U=3Dhttps%3A%2F%2=
Fwww.amazon.com%2Fgp%2Fcss%2Forder-history%3Fref_%3Dpe_125775000_1044873430=
_TLH0001BT_fed_yo_default&amp;H=3DSDMF7CBLARH5K3F5WV3EHTIGT6KA&amp;ref_=3Dp=
e_125775000_1044873430_TLH0001BT_fed_yo_default" style=3D"color:#ffffff;tex=
t-decoration:none;white-space:nowrap!important" target=3D"_blank">Your Orde=
rs</a>=C2=A0=C2=A0=C2=A0=C2=A0=C2=A0=C2=A0 <a href=3D"https://www.amazon.co=
m/gp/r.html?C=3D3E92MSAD2LHAU&amp;K=3D1NG4SOUTCDRLG&amp;M=3Durn:rtn:msg:202=
50324030915cb5e9fe645494afa90397e25ed80p0na&amp;R=3DA3BH2TE7SMPQ&amp;T=3DC&=
amp;U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fyour-account%3Fref_%3Dpe_125775000_1=
044873430_TLH0002BT_fed_ya_default&amp;H=3DLWG3OKOXVXN0PUSILQGBDALTFFUA&amp=
;ref_=3Dpe_125775000_1044873430_TLH0002BT_fed_ya_default" style=3D"color:#f=
fffff;text-decoration:none;white-space:nowrap!important" target=3D"_blank">=
Your Account</a>=C2=A0=C2=A0=C2=A0=C2=A0=C2=A0=C2=A0 <a href=3D"https://www=
.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&amp;K=3D1NG4SOUTCDRLG&amp;M=3Durn:r=
tn:msg:20250324030915cb5e9fe645494afa90397e25ed80p0na&amp;R=3D1X72ZAXIEF530=
&amp;T=3DC&amp;U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fbuyagain%3Fref_%3Dpe=
_125775000_1044873430_TLH0003BT_fed_bia_default&amp;H=3DIHGEYEDYTEEAAFUP3FE=
VKW5WLKOA&amp;ref_=3Dpe_125775000_1044873430_TLH0003BT_fed_bia_default" sty=
le=3D"color:#ffffff;text-decoration:none;white-space:nowrap!important" targ=
et=3D"_blank">Buy Again</a><u></u><u></u></div></td></tr></tbody></table></=
td></tr></tbody></table></div></div></td></tr></tbody></table></div></td></=
tr></tbody></table></div> </td></tr></tbody></table></div><div style=3D"bac=
kground:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px"><=
table align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" rol=
e=3D"presentation" style=3D"background:#ffffff;background-color:#ffffff;wid=
th:100%"><tbody><tr><td style=3D"direction:ltr;font-size:0px;padding:4px 8p=
x 4px 8px;text-align:left"> <div style=3D"background:#ffffff;background-col=
or:#ffffff;margin:0px auto;border-radius:4px;max-width:584px"><table align=
=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presen=
tation" style=3D"background:#ffffff;background-color:#ffffff;width:100%;bor=
der-radius:4px"><tbody><tr><td style=3D"direction:ltr;font-size:0px;padding=
:12px 8px 16px 8px;text-align:left">  <div style=3D"margin:0px auto;max-wid=
th:568px"><table align=3D"center" border=3D"0" cellpadding=3D"0" cellspacin=
g=3D"0" role=3D"presentation" style=3D"width:100%"><tbody><tr><td style=3D"=
direction:ltr;font-size:0px;padding:0;padding-bottom:10px;text-align:left">=
<div style=3D"font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;fon=
t-size:15px;line-height:1;text-align:center;color:#000000"><h2 style=3D"mar=
gin:0;padding:0;font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;f=
ont-weight:700;font-size:18px;line-height:22px;color:#0f1111" class=3D"m_13=
23047936219179829rio-header">Thanks for your order, Elliot!</h2></div></td>=
</tr></tbody></table></div>   <table cellpadding=3D"0" cellspacing=3D"0" wi=
dth=3D"100%" border=3D"0" style=3D"color:#000000;font-family:Ember,&#39;Ama=
zon Ember&#39;,Arial,sans-serif;font-size:15px;line-height:22px;table-layou=
t:auto;width:100%;border:none"><tbody><tr><td width=3D"25%" valign=3D"top">=
<table cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" border=3D"0" styl=
e=3D"color:#000000;font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-seri=
f;font-size:15px;line-height:22px;table-layout:auto;width:100%;border:none"=
><tbody><tr><td style=3D"height:18px"><table cellpadding=3D"0" cellspacing=
=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;font-family:Ember=
,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;line-height:22px;ta=
ble-layout:auto;width:100%;border:none"><tbody><tr><td width=3D"50%" height=
=3D"18"> <table cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" border=
=3D"0" style=3D"color:#000000;font-family:Ember,&#39;Amazon Ember&#39;,Aria=
l,sans-serif;font-size:15px;line-height:22px;table-layout:auto;width:100%;b=
order:none"><tbody><tr><td height=3D"7"></td></tr><tr><td height=3D"4"></td=
></tr><tr><td height=3D"7"></td></tr></tbody></table> </td><td height=3D"18=
"> <table cellpadding=3D"0" cellspacing=3D"0" width=3D"18" border=3D"0" sty=
le=3D"color:#000000;font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-ser=
if;font-size:15px;line-height:22px;table-layout:auto;width:18;border:none">=
<tbody><tr><td width=3D"18" height=3D"18"><div style=3D"border-radius:18px;=
background:#1196ab;line-height:17px;width:18px;height:18px;text-align:cente=
r"><img src=3D"https://m.media-amazon.com/images/G/01/outbound/etc/steptrac=
ker-checkmark.png" width=3D"12" height=3D"10" style=3D"width:12px;height:10=
px"></div></td></tr></tbody></table> </td><td width=3D"50%" height=3D"18"> =
<table cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" border=3D"0" styl=
e=3D"color:#000000;font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-seri=
f;font-size:15px;line-height:22px;table-layout:auto;width:100%;border:none"=
><tbody><tr><td height=3D"7"></td></tr><tr><td height=3D"4" style=3D"backgr=
ound:#e9e7e7"><div style=3D"width:100%;height:0;border-width:0;background:#=
1196ab;border-bottom:4px solid #1196ab;border-radius:0 2px 2px 0"></div></t=
d></tr><tr><td height=3D"7"></td></tr></tbody></table> </td></tr></tbody></=
table></td></tr><tr><td height=3D"5"></td></tr><tr><td><div style=3D"font-f=
amily:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;font-wei=
ght:700;line-height:21px;text-align:center;color:#0f1111"><span class=3D"m_=
1323047936219179829rio-text">Ordered</span></div>  </td></tr></tbody></tabl=
e></td><td width=3D"25%" valign=3D"top"><table cellpadding=3D"0" cellspacin=
g=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;font-family:Embe=
r,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;line-height:22px;t=
able-layout:auto;width:100%;border:none"><tbody><tr><td style=3D"height:18p=
x"><table cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" border=3D"0" s=
tyle=3D"color:#000000;font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-s=
erif;font-size:15px;line-height:22px;table-layout:auto;width:100%;border:no=
ne"><tbody><tr><td width=3D"50%" height=3D"18">  <table cellpadding=3D"0" c=
ellspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;font-fa=
mily:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;line-heig=
ht:22px;table-layout:auto;width:100%;border:none"><tbody><tr><td height=3D"=
7"></td></tr><tr><td height=3D"4" style=3D"background:#e9e7e7"><div style=
=3D"width:100%;height:0;border-width:0;background:#e9e7e7;border-bottom:4px=
 solid #e9e7e7"></div></td></tr><tr><td height=3D"7"></td></tr></tbody></ta=
ble></td><td height=3D"18">  <table cellpadding=3D"0" cellspacing=3D"0" wid=
th=3D"18" border=3D"0" style=3D"color:#000000;font-family:Ember,&#39;Amazon=
 Ember&#39;,Arial,sans-serif;font-size:15px;line-height:22px;table-layout:a=
uto;width:18;border:none"><tbody><tr><td width=3D"18" height=3D"18"><div st=
yle=3D"border-radius:18px;background:#e9e7e7;line-height:17px;width:18px;he=
ight:18px;text-align:center">=C2=A0</div></td></tr></tbody></table></td><td=
 width=3D"50%" height=3D"18">  <table cellpadding=3D"0" cellspacing=3D"0" w=
idth=3D"100%" border=3D"0" style=3D"color:#000000;font-family:Ember,&#39;Am=
azon Ember&#39;,Arial,sans-serif;font-size:15px;line-height:22px;table-layo=
ut:auto;width:100%;border:none"><tbody><tr><td height=3D"7"></td></tr><tr><=
td height=3D"4" style=3D"background:#e9e7e7"><div style=3D"width:100%;heigh=
t:0;border-width:0;background:#e9e7e7;border-bottom:4px solid #e9e7e7"></di=
v></td></tr><tr><td height=3D"7"></td></tr></tbody></table></td></tr></tbod=
y></table></td></tr><tr><td height=3D"5"></td></tr><tr><td> <div style=3D"f=
ont-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;fon=
t-weight:400;line-height:21px;text-align:center;color:#0f1111"><span class=
=3D"m_1323047936219179829rio-text">Shipped</span></div> </td></tr></tbody><=
/table></td><td width=3D"25%" valign=3D"top"><table cellpadding=3D"0" cells=
pacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;font-family=
:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;line-height:2=
2px;table-layout:auto;width:100%;border:none"><tbody><tr><td style=3D"heigh=
t:18px"><table cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" border=3D=
"0" style=3D"color:#000000;font-family:Ember,&#39;Amazon Ember&#39;,Arial,s=
ans-serif;font-size:15px;line-height:22px;table-layout:auto;width:100%;bord=
er:none"><tbody><tr><td width=3D"50%" height=3D"18">  <table cellpadding=3D=
"0" cellspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;fo=
nt-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;line=
-height:22px;table-layout:auto;width:100%;border:none"><tbody><tr><td heigh=
t=3D"7"></td></tr><tr><td height=3D"4" style=3D"background:#e9e7e7"><div st=
yle=3D"width:100%;height:0;border-width:0;background:#e9e7e7;border-bottom:=
4px solid #e9e7e7"></div></td></tr><tr><td height=3D"7"></td></tr></tbody><=
/table></td><td height=3D"18">  <table cellpadding=3D"0" cellspacing=3D"0" =
width=3D"18" border=3D"0" style=3D"color:#000000;font-family:Ember,&#39;Ama=
zon Ember&#39;,Arial,sans-serif;font-size:15px;line-height:22px;table-layou=
t:auto;width:18;border:none"><tbody><tr><td width=3D"18" height=3D"18"><div=
 style=3D"border-radius:18px;background:#e9e7e7;line-height:17px;width:18px=
;height:18px;text-align:center">=C2=A0</div></td></tr></tbody></table></td>=
<td width=3D"50%" height=3D"18">  <table cellpadding=3D"0" cellspacing=3D"0=
" width=3D"100%" border=3D"0" style=3D"color:#000000;font-family:Ember,&#39=
;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;line-height:22px;table-l=
ayout:auto;width:100%;border:none"><tbody><tr><td height=3D"7"></td></tr><t=
r><td height=3D"4" style=3D"background:#e9e7e7"><div style=3D"width:100%;he=
ight:0;border-width:0;background:#e9e7e7;border-bottom:4px solid #e9e7e7"><=
/div></td></tr><tr><td height=3D"7"></td></tr></tbody></table></td></tr></t=
body></table></td></tr><tr><td height=3D"5"></td></tr><tr><td> <div style=
=3D"font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15p=
x;font-weight:400;line-height:21px;text-align:center;color:#0f1111"><span c=
lass=3D"m_1323047936219179829rio-text">Out for delivery</span></div> </td><=
/tr></tbody></table></td><td width=3D"25%" valign=3D"top"><table cellpaddin=
g=3D"0" cellspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#00000=
0;font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;=
line-height:22px;table-layout:auto;width:100%;border:none"><tbody><tr><td s=
tyle=3D"height:18px"><table cellpadding=3D"0" cellspacing=3D"0" width=3D"10=
0%" border=3D"0" style=3D"color:#000000;font-family:Ember,&#39;Amazon Ember=
&#39;,Arial,sans-serif;font-size:15px;line-height:22px;table-layout:auto;wi=
dth:100%;border:none"><tbody><tr><td width=3D"50%" height=3D"18">  <table c=
ellpadding=3D"0" cellspacing=3D"0" width=3D"100%" border=3D"0" style=3D"col=
or:#000000;font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-s=
ize:15px;line-height:22px;table-layout:auto;width:100%;border:none"><tbody>=
<tr><td height=3D"7"></td></tr><tr><td height=3D"4" style=3D"background:#e9=
e7e7"><div style=3D"width:100%;height:0;border-width:0;background:#e9e7e7;b=
order-bottom:4px solid #e9e7e7"></div></td></tr><tr><td height=3D"7"></td><=
/tr></tbody></table></td><td height=3D"18">  <table cellpadding=3D"0" cells=
pacing=3D"0" width=3D"18" border=3D"0" style=3D"color:#000000;font-family:E=
mber,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;line-height:22p=
x;table-layout:auto;width:18;border:none"><tbody><tr><td width=3D"18" heigh=
t=3D"18"><div style=3D"border-radius:18px;background:#e9e7e7;line-height:17=
px;width:18px;height:18px;text-align:center">=C2=A0</div></td></tr></tbody>=
</table></td><td width=3D"50%" height=3D"18">  <table cellpadding=3D"0" cel=
lspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;font-fami=
ly:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;line-height=
:22px;table-layout:auto;width:100%;border:none"><tbody><tr><td height=3D"7"=
></td></tr><tr><td height=3D"4"></td></tr><tr><td height=3D"7"></td></tr></=
tbody></table></td></tr></tbody></table></td></tr><tr><td height=3D"5"></td=
></tr><tr><td> <div style=3D"font-family:Ember,&#39;Amazon Ember&#39;,Arial=
,sans-serif;font-size:15px;font-weight:400;line-height:21px;text-align:cent=
er;color:#0f1111"><span class=3D"m_1323047936219179829rio-text">Delivered</=
span></div> </td></tr></tbody></table></td></tr></tbody></table></td></tr><=
/tbody></table></div>  </td></tr></tbody></table></div><div style=3D"backgr=
ound:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px"><tab=
le align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=
=3D"presentation" style=3D"background:#ffffff;background-color:#ffffff;widt=
h:100%"><tbody><tr><td style=3D"direction:ltr;font-size:0px;padding:4px 8px=
 4px 8px;text-align:left"><div style=3D"margin:0px auto;border-radius:4px;m=
ax-width:584px"><table align=3D"center" border=3D"0" cellpadding=3D"0" cell=
spacing=3D"0" role=3D"presentation" style=3D"width:100%;border-radius:4px">=
<tbody><tr><td style=3D"direction:ltr;font-size:0px;padding:0px 8px 0px 8px=
;text-align:left"><p style=3D"border-top:solid 1px #bbbfbf;font-size:1px;ma=
rgin:0px auto;width:100%"></p></td></tr></tbody></table></div></td></tr></t=
body></table></div><div style=3D"background:#ffffff;background-color:#fffff=
f;margin:0px auto;max-width:600px"><table align=3D"center" border=3D"0" cel=
lpadding=3D"0" cellspacing=3D"0" role=3D"presentation" style=3D"background:=
#ffffff;background-color:#ffffff;width:100%"><tbody><tr><td style=3D"direct=
ion:ltr;font-size:0px;padding:4px 8px 4px 8px;text-align:left"> <div style=
=3D"background:#ffffff;background-color:#ffffff;margin:0px auto;border-radi=
us:4px;max-width:584px"><table align=3D"center" border=3D"0" cellpadding=3D=
"0" cellspacing=3D"0" role=3D"presentation" style=3D"background:#ffffff;bac=
kground-color:#ffffff;width:100%;border-radius:4px"><tbody><tr><td style=3D=
"direction:ltr;font-size:0px;padding:12px 8px 16px 8px;text-align:left">   =
   <div style=3D"margin:0px auto;max-width:568px"><table align=3D"center" b=
order=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" style=
=3D"width:100%"><tbody><tr><td style=3D"direction:ltr;font-size:0px;padding=
:0;text-align:left"><div class=3D"m_1323047936219179829mj-column-per-100" s=
tyle=3D"font-size:0px;text-align:left;direction:ltr;display:inline-block;ve=
rtical-align:top;width:100%"><table border=3D"0" cellpadding=3D"0" cellspac=
ing=3D"0" role=3D"presentation" width=3D"100%"><tbody><tr><td style=3D"vert=
ical-align:top;padding:0"><table border=3D"0" cellpadding=3D"0" cellspacing=
=3D"0" role=3D"presentation" width=3D"100%"><tbody><tr><td align=3D"left" s=
tyle=3D"font-size:0px;padding:0;word-break:break-word"><div style=3D"margin=
:0px auto;max-width:568px"><table align=3D"center" border=3D"0" cellpadding=
=3D"0" cellspacing=3D"0" role=3D"presentation" style=3D"width:100%"><tbody>=
<tr><td style=3D"direction:ltr;font-size:0px;padding:0;text-align:left"><di=
v class=3D"m_1323047936219179829mj-column-per-100" style=3D"font-size:0px;t=
ext-align:left;direction:ltr;display:inline-block;vertical-align:top;width:=
100%"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"prese=
ntation" width=3D"100%"><tbody><tr><td style=3D"vertical-align:top;padding:=
0"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presenta=
tion" width=3D"100%"><tbody><tr><td align=3D"left" style=3D"font-size:0px;p=
adding:0;word-break:break-word"><div style=3D"font-family:Ember,&#39;Amazon=
 Ember&#39;,Arial,sans-serif;font-size:18px;font-weight:700;line-height:22p=
x;text-align:left;color:#0f1111"><span class=3D"m_1323047936219179829rio-te=
xt">Arriving Tuesday</span></div></td></tr><tr><td align=3D"left" style=3D"=
font-size:0px;padding:0;word-break:break-word"><div style=3D"font-family:Em=
ber,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;font-weight:400;=
line-height:21px;text-align:left;color:#0f1111"><span class=3D"m_1323047936=
219179829rio-text"><b>Elliot - OAKLAND, CA</b></span></div></td></tr><tr><t=
d align=3D"left" style=3D"font-size:0px;padding:0;word-break:break-word"><d=
iv style=3D"font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-=
size:15px;font-weight:400;line-height:21px;text-align:left;color:#0f1111"><=
span class=3D"m_1323047936219179829rio-text"><span>Order #</span> <span>=E2=
=80=AB113-7730110-9707458</span></span></div></td></tr><tr><td align=3D"lef=
t" style=3D"font-size:0px;padding:0;word-break:break-word"><div style=3D"ma=
rgin:0px auto;max-width:568px"><table align=3D"center" border=3D"0" cellpad=
ding=3D"0" cellspacing=3D"0" role=3D"presentation" style=3D"width:100%"><tb=
ody><tr><td style=3D"direction:ltr;font-size:0px;padding:0;text-align:left"=
><div class=3D"m_1323047936219179829mj-column-per-100" style=3D"font-size:0=
;line-height:0;text-align:left;display:inline-block;width:100%;direction:lt=
r"><div class=3D"m_1323047936219179829mj-column-per-50" style=3D"font-size:=
0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;w=
idth:50%"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"p=
resentation" width=3D"100%"><tbody><tr><td style=3D"vertical-align:top;padd=
ing:0"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"pres=
entation" width=3D"100%"><tbody>   <tr><td align=3D"left" style=3D"font-siz=
e:0px;padding:0;word-break:break-word"><div style=3D"height:20px;line-heigh=
t:20px">=E2=80=8A</div></td></tr><tr><td align=3D"left" style=3D"font-size:=
0px;padding:0;word-break:break-word"><table cellpadding=3D"0" cellspacing=
=3D"0" border=3D"0" role=3D"presentation"><tbody><tr><td style=3D"text-alig=
n:center;border-radius:24px;background:#ffd916"><a aria-describedby=3D"View=
 or edit order" href=3D"https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&=
amp;K=3D1NG4SOUTCDRLG&amp;M=3Durn:rtn:msg:20250324030915cb5e9fe645494afa903=
97e25ed80p0na&amp;R=3D24V5IOHSR4AQR&amp;T=3DC&amp;U=3Dhttps%3A%2F%2Fwww.ama=
zon.com%2Fgp%2Fcss%2Forder-details%3ForderID%3D113-7730110-9707458%26ref_%3=
Dpe_125775000_1044873430_fed_veo&amp;H=3DA72YOXJEDRJG5ZDGVAJ05YC8WM8A&amp;r=
ef_=3Dpe_125775000_1044873430_fed_veo" style=3D"border:1px solid #fcd200;ba=
ckground:#ffd916;color:#0f1111;text-decoration:none;border-radius:24px;padd=
ing:6px 16px;display:inline-block;font-size:13px;line-height:18px;white-spa=
ce:nowrap" target=3D"_blank"><span style=3D"text-decoration:none">View or e=
dit order</span></a></td></tr></tbody></table></td></tr><tr><td align=3D"le=
ft" style=3D"font-size:0px;padding:0;word-break:break-word"><div style=3D"h=
eight:12px;line-height:12px">=E2=80=8A</div></td></tr></tbody></table></td>=
</tr></tbody></table></div><div class=3D"m_1323047936219179829mj-column-per=
-50" style=3D"font-size:0;line-height:0;text-align:left;display:inline-bloc=
k;width:100%;direction:ltr"></div></div></td></tr></tbody></table></div></t=
d></tr><tr><td align=3D"left" style=3D"font-size:0px;padding:0;word-break:b=
reak-word"><div style=3D"margin:0px auto;max-width:568px"><table align=3D"c=
enter" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentatio=
n" style=3D"width:100%"><tbody><tr><td style=3D"direction:ltr;font-size:0px=
;padding:0;text-align:left"><div class=3D"m_1323047936219179829mj-column-pe=
r-100" style=3D"font-size:0px;text-align:left;direction:ltr;display:inline-=
block;vertical-align:top;width:100%"><table border=3D"0" cellpadding=3D"0" =
cellspacing=3D"0" role=3D"presentation" width=3D"100%"><tbody><tr><td style=
=3D"vertical-align:top;padding:0"><table border=3D"0" cellpadding=3D"0" cel=
lspacing=3D"0" role=3D"presentation" width=3D"100%"><tbody><tr><td align=3D=
"left" style=3D"font-size:0px;padding:0;word-break:break-word"><div style=
=3D"height:16px;line-height:16px">=E2=80=8A</div></td></tr><tr><td align=3D=
"left" style=3D"font-size:0px;padding:0;word-break:break-word"><div style=
=3D"margin:0px auto;max-width:568px"><table align=3D"center" border=3D"0" c=
ellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" style=3D"width:100=
%"><tbody><tr><td style=3D"direction:ltr;font-size:0px;padding:0;text-align=
:left"><div class=3D"m_1323047936219179829mj-column-per-100" style=3D"font-=
size:0;line-height:0;text-align:left;display:inline-block;width:100%;direct=
ion:ltr"><div class=3D"m_1323047936219179829mj-column-per-25" style=3D"font=
-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align=
:top;width:25%"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" rol=
e=3D"presentation" width=3D"100%"><tbody><tr><td style=3D"vertical-align:to=
p;padding:0;padding-right:8px;padding-left:0"><table border=3D"0" cellpaddi=
ng=3D"0" cellspacing=3D"0" role=3D"presentation" width=3D"100%"><tbody>    =
   <tr><td align=3D"left" class=3D"m_1323047936219179829rio-asin-image" sty=
le=3D"font-size:0px;padding:0;word-break:break-word"><table style=3D"width:=
100%;border-radius:4px" class=3D"m_1323047936219179829rio-asin-image-9SHHht=
svP2xKQKVwYKxRq2" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"=
presentation" width=3D"100%"><tbody><tr><td class=3D"m_1323047936219179829p=
roductImageTd" style=3D"background-image:linear-gradient(rgba(15,17,17,0.03=
),rgba(15,17,17,0.03));border-radius:4px;width:100%;height:64px;vertical-al=
ign:middle;text-align:center;padding:8px"><a href=3D"https://www.amazon.com=
/gp/f.html?C=3D3E92MSAD2LHAU&amp;K=3D1NG4SOUTCDRLG&amp;M=3Durn:rtn:msg:2025=
0324030915cb5e9fe645494afa90397e25ed80p0na&amp;R=3D3ST43RAQBTVAD&amp;T=3DC&=
amp;U=3D%2Fdp%2FB01DZQI700%3Fref_%3Dpe_125775000_1044873430_fed_asin_title&=
amp;H=3DWHJQ4VW6AE4PAJP7AAZOJ8OB4GEA&amp;ref_=3Dpe_125775000_1044873430_fed=
_asin_title" style=3D"background-color:transparent;display:inline-block" ta=
rget=3D"_blank"><img style=3D"width:100%;height:auto;max-height:64px;max-wi=
dth:64px;margin:auto;display:block" class=3D"m_1323047936219179829productIm=
age" width=3D"122" src=3D"https://m.media-amazon.com/images/I/51XSWNAdKlL.S=
S90_.jpg" alt=3D"BLACK+DECKER 2.5 Cu. Ft. Compact Refrigerator, ENERGY STAR=
 Certified Small Refrigerator, Single Door Mini Fridge with Freezer, Person=
al Fridge for Home/Dorm Room, R600a Refrigerant, VCM Stainless Look"></a></=
td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table=
></div><div class=3D"m_1323047936219179829mj-column-per-75" style=3D"font-s=
ize:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:t=
op;width:75%"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=
=3D"presentation" width=3D"100%"><tbody><tr><td style=3D"vertical-align:top=
;padding:0"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D=
"presentation" width=3D"100%"><tbody><tr><td align=3D"left" style=3D"font-s=
ize:0px;padding:0;word-break:break-word"><div style=3D"font-family:Ember,&#=
39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;font-weight:400;line-h=
eight:21px;text-align:left;color:#0f1111"><span class=3D"m_1323047936219179=
829rio-text"><a href=3D"https://www.amazon.com/gp/f.html?C=3D3E92MSAD2LHAU&=
amp;K=3D1NG4SOUTCDRLG&amp;M=3Durn:rtn:msg:20250324030915cb5e9fe645494afa903=
97e25ed80p0na&amp;R=3D3RWSRC6056ONO&amp;T=3DC&amp;U=3D%2Fdp%2FB01DZQI700%3F=
ref_%3Dpe_125775000_1044873430_fed_asin_title&amp;H=3D8UKZFNHCSR7AZ92DIAAPE=
EXBJCOA&amp;ref_=3Dpe_125775000_1044873430_fed_asin_title" style=3D"color:#=
0f1111" target=3D"_blank">BLACK+DECKER 2.5 Cu. Ft. Compact ...</a></span></=
div></td></tr>   <tr><td align=3D"left" style=3D"font-size:0px;padding:0;wo=
rd-break:break-word"><div style=3D"height:4px;line-height:4px">=E2=80=8A</d=
iv></td></tr><tr><td align=3D"left" style=3D"font-size:0px;padding:0;word-b=
reak:break-word"><div style=3D"font-family:Ember,&#39;Amazon Ember&#39;,Ari=
al,sans-serif;font-size:13px;font-weight:400;line-height:18px;text-align:le=
ft;color:#565959"><span class=3D"m_1323047936219179829rio-text">Quantity: 1=
</span></div></td></tr> <tr><td align=3D"left" style=3D"font-size:0px;paddi=
ng:0;word-break:break-word"><div style=3D"height:4px;line-height:4px">=E2=
=80=8A</div></td></tr><tr><td align=3D"left" style=3D"font-size:0px;padding=
:0;word-break:break-word"><div style=3D"font-family:Ember,&#39;Amazon Ember=
&#39;,Arial,sans-serif;font-size:18px;font-weight:400;line-height:22px;text=
-align:left;color:#0f1111"><span class=3D"m_1323047936219179829rio-text">  =
<span role=3D"region" aria-label=3D"{amount=3D189.99, currencyCode=3D{small=
estAmount=3D0.01, code=3DUSD}}" style=3D"font-size:18px;font-weight:400;ver=
tical-align:baseline"><sup style=3D"font-size:10px">$</sup>189<sup style=3D=
"font-size:10px">99</sup> </span></span></div></td></tr></tbody></table></t=
d></tr></tbody></table></div></div></td></tr></tbody></table></div></td></t=
r></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table=
></div></td></tr></tbody></table></td></tr></tbody></table></div></td></tr>=
</tbody></table></div></td></tr><tr><td align=3D"left" style=3D"font-size:0=
px;padding:0;word-break:break-word"><div style=3D"height:12px;line-height:1=
2px">=E2=80=8A</div></td></tr><tr><td align=3D"left" style=3D"font-size:0px=
;padding:0;word-break:break-word"><table width=3D"100%" role=3D"presentatio=
n"><tbody><tr><td style=3D"width:100%;height:1px;padding-top:0px;padding-bo=
ttom:0px;padding-left:0px;padding-right:0px"><p style=3D"border-top:solid 1=
px #bbbfbf;font-size:1px;margin:0px auto;width:100%"></p></td></tr></tbody>=
</table></td></tr><tr><td align=3D"left" style=3D"font-size:0px;padding:0;w=
ord-break:break-word"><div style=3D"margin:0px auto;max-width:568px"><table=
 align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"=
presentation" style=3D"width:100%"><tbody><tr><td style=3D"direction:ltr;fo=
nt-size:0px;padding:0;text-align:left"><div class=3D"m_1323047936219179829m=
j-column-per-100" style=3D"font-size:0px;text-align:left;direction:ltr;disp=
lay:inline-block;vertical-align:top;width:100%"><table border=3D"0" cellpad=
ding=3D"0" cellspacing=3D"0" role=3D"presentation" width=3D"100%"><tbody><t=
r><td style=3D"vertical-align:top;padding:0"><table border=3D"0" cellpaddin=
g=3D"0" cellspacing=3D"0" role=3D"presentation" width=3D"100%"><tbody><tr><=
td align=3D"left" style=3D"font-size:0px;padding:0;word-break:break-word"><=
div style=3D"height:12px;line-height:12px">=E2=80=8A</div></td></tr><tr><td=
 align=3D"left" style=3D"font-size:0px;padding:0;word-break:break-word"><di=
v style=3D"margin:0px auto;max-width:568px"><table align=3D"center" border=
=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" style=3D"w=
idth:100%"><tbody><tr><td style=3D"direction:ltr;font-size:0px;padding:0;te=
xt-align:left"><div class=3D"m_1323047936219179829mj-column-per-100" style=
=3D"font-size:0px;text-align:left;direction:ltr;display:inline-block;vertic=
al-align:top;width:100%"><table border=3D"0" cellpadding=3D"0" cellspacing=
=3D"0" role=3D"presentation" width=3D"100%"><tbody><tr><td style=3D"vertica=
l-align:top;padding:0"><table border=3D"0" cellpadding=3D"0" cellspacing=3D=
"0" role=3D"presentation" width=3D"100%"><tbody><tr><td align=3D"left" styl=
e=3D"font-size:0px;padding:0;word-break:break-word"><table cellpadding=3D"0=
" cellspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;font=
-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;line-h=
eight:22px;table-layout:auto;width:100%;border:none"><tbody><tr><td><u></u>=
<u></u></td><td align=3D"left" style=3D"width:50%;padding-right:30px;font-s=
ize:14px">Total</td><td align=3D"right" style=3D"width:50%;font-size:14px;f=
ont-weight:bold"><u></u><u></u><u></u> <u></u>  $209.46<u></u><u></u></td><=
/tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></d=
iv></td></tr></tbody></table></div></td></tr></tbody></table></td></tr></tb=
ody></table></div></td></tr></tbody></table></div></td></tr><tr><td align=
=3D"left" style=3D"font-size:0px;padding:0;word-break:break-word"><div styl=
e=3D"height:12px;line-height:12px">=E2=80=8A</div></td></tr><tr><td align=
=3D"left" style=3D"font-size:0px;padding:0;word-break:break-word"><table wi=
dth=3D"100%" role=3D"presentation"><tbody><tr><td style=3D"width:100%;heigh=
t:1px;padding-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px=
"><p style=3D"border-top:solid 1px #bbbfbf;font-size:1px;margin:0px auto;wi=
dth:100%"></p></td></tr></tbody></table></td></tr></tbody></table></td></tr=
></tbody></table></div></td></tr></tbody></table></div> </td></tr></tbody><=
/table></div> </td></tr></tbody></table></div><div style=3D"background:#fff=
fff;background-color:#ffffff;margin:0px auto;max-width:600px"><table align=
=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presen=
tation" style=3D"background:#ffffff;background-color:#ffffff;width:100%"><t=
body><tr><td style=3D"direction:ltr;font-size:0px;padding:4px 8px 4px 8px;t=
ext-align:left"><div style=3D"background:#ffffff;background-color:#ffffff;m=
argin:0px auto;border-radius:4px;max-width:584px"><table align=3D"center" b=
order=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" style=
=3D"background:#ffffff;background-color:#ffffff;width:100%;border-radius:4p=
x"><tbody><tr><td style=3D"direction:ltr;font-size:0px;padding:4px 8px 4px =
8px;text-align:left">  <table cellpadding=3D"0" cellspacing=3D"0" width=3D"=
100%" border=3D"0" style=3D"color:#000000;font-family:Ember,&#39;Amazon Emb=
er&#39;,Arial,sans-serif;font-size:15px;line-height:22px;table-layout:auto;=
width:100%;border:none"><tbody><tr><td width=3D"65%"><div style=3D"font-fam=
ily:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;line-heigh=
t:1;text-align:left;color:#000000"><h2 style=3D"margin:0;padding:0;font-fam=
ily:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-weight:700;font-size=
:18px;line-height:22px;color:#0f1111" class=3D"m_1323047936219179829rio-hea=
der">Deals related to your purchases</h2></div></td></tr></tbody></table><d=
iv style=3D"height:8px;line-height:8px">=E2=80=8A</div><table cellpadding=
=3D"0" cellspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000=
;font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;l=
ine-height:22px;table-layout:auto;width:100%;border:none"><tbody><tr><td va=
lign=3D"top" width=3D"32%">  <table role=3D"presentation" style=3D"table-la=
yout:fixed;width:100%;max-width:100%;background-color:#f7f7f7;border-radius=
:8px"><tbody><tr><td style=3D"padding:0px"><table role=3D"presentation" cla=
ss=3D"m_1323047936219179829rio-asin-container-image" width=3D"100%"><tbody>=
<tr><td align=3D"center"><a href=3D"https://www.amazon.com/gp/r.html?C=3D3E=
92MSAD2LHAU&amp;K=3D1NG4SOUTCDRLG&amp;M=3Durn:rtn:msg:20250324030915cb5e9fe=
645494afa90397e25ed80p0na&amp;R=3D21WJYN3EP2IX&amp;T=3DC&amp;U=3Dhttps%3A%2=
F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB017GYO3I2%2F%3Fref_%3Dpe_125775000_104=
4873430_AGH3Col0400IMG_2p_0_lm&amp;H=3DEX62SEDXU5KOJTMJ1TRWSUTUOJQA&amp;ref=
_=3Dpe_125775000_1044873430_AGH3Col0400IMG_2p_0_lm" target=3D"_blank"><img =
src=3D"https://m.media-amazon.com/images/I/51QROLMihYL._SR276,276_.jpg" alt=
=3D"Saline Nose Wipes by Boogie, for Baby &amp; Kids, Face, Hand &amp; Body=
, FSA/HSA Eligible, Made with Vitamin E, Aloe, and Natural Saline, Unscente=
d, 30 Count (Pack of 6)" align=3D"center" width=3D"138" height=3D"138" styl=
e=3D"width:100%;height:auto;max-width:138px;max-height:138px"></a></td></tr=
></tbody></table><div style=3D"padding:4px"> <table role=3D"presentation" b=
order=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=3D"padding-bottom:4px=
"><tbody><tr><td><span style=3D"font-weight:400;font-size:13px;line-height:=
16px;color:#cc0c39;display:inline-block;margin-right:4px">-33% </span><span=
 style=3D"font-size:13px;font-weight:400;line-height:16px;color:#0f1111;dir=
ection:ltr!important">$17.95 </span></td></tr></tbody></table><div style=3D=
"font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;f=
ont-weight:400;line-height:20px;text-align:left;color:#0f1111"><span class=
=3D"m_1323047936219179829rio-text"><div style=3D"width:174px;overflow:hidde=
n;text-overflow:ellipsis;white-space:nowrap;max-width:100%">Saline Nose Wip=
es by Boogie, for...</div></span></div></div></td></tr></tbody></table></td=
><td width=3D"2%"><div>=C2=A0</div></td>  <td valign=3D"top" width=3D"32%">=
  <table role=3D"presentation" style=3D"table-layout:fixed;width:100%;max-w=
idth:100%;background-color:#f7f7f7;border-radius:8px"><tbody><tr><td style=
=3D"padding:0px"><table role=3D"presentation" class=3D"m_132304793621917982=
9rio-asin-container-image" width=3D"100%"><tbody><tr><td align=3D"center"><=
a href=3D"https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&amp;K=3D1NG4SO=
UTCDRLG&amp;M=3Durn:rtn:msg:20250324030915cb5e9fe645494afa90397e25ed80p0na&=
amp;R=3D17H1EBP9ASLRI&amp;T=3DC&amp;U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2=
Fproduct%2FB001RNI880%2F%3Fref_%3Dpe_125775000_1044873430_AGH3Col0401IMG_2p=
_1_lm&amp;H=3DE7APFBEDAH3VPUFMHGPZ77NSWOQA&amp;ref_=3Dpe_125775000_10448734=
30_AGH3Col0401IMG_2p_1_lm" target=3D"_blank"><img src=3D"https://m.media-am=
azon.com/images/I/31LC35T4rEL._SR276,276_.jpg" alt=3D"Danskin Women&#39;s P=
erformance Sleek Pocket Ankle Legging" align=3D"center" width=3D"138" heigh=
t=3D"138" style=3D"width:100%;height:auto;max-width:138px;max-height:138px"=
></a></td></tr></tbody></table><div style=3D"padding:4px"> <table role=3D"p=
resentation" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=3D"padd=
ing-bottom:4px"><tbody><tr><td><span style=3D"font-weight:400;font-size:13p=
x;line-height:16px;color:#cc0c39;display:inline-block;margin-right:4px">-23=
% </span><span style=3D"font-size:13px;font-weight:400;line-height:16px;col=
or:#0f1111;direction:ltr!important">$21.68 </span></td></tr></tbody></table=
><div style=3D"font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;fo=
nt-size:15px;font-weight:400;line-height:20px;text-align:left;color:#0f1111=
"><span class=3D"m_1323047936219179829rio-text"><div style=3D"width:174px;o=
verflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%">Da=
nskin Women&#39;s Performance...</div></span></div></div></td></tr></tbody>=
</table></td><td width=3D"2%"><div>=C2=A0</div></td>  <td valign=3D"top" wi=
dth=3D"32%">  <table role=3D"presentation" style=3D"table-layout:fixed;widt=
h:100%;max-width:100%;background-color:#f7f7f7;border-radius:8px"><tbody><t=
r><td style=3D"padding:0px"><table role=3D"presentation" class=3D"m_1323047=
936219179829rio-asin-container-image" width=3D"100%"><tbody><tr><td align=
=3D"center"><a href=3D"https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&a=
mp;K=3D1NG4SOUTCDRLG&amp;M=3Durn:rtn:msg:20250324030915cb5e9fe645494afa9039=
7e25ed80p0na&amp;R=3D2U573ZXZ2CY3M&amp;T=3DC&amp;U=3Dhttps%3A%2F%2Fwww.amaz=
on.com%2Fgp%2Fproduct%2FB0CG9HP7XS%2F%3Fref_%3Dpe_125775000_1044873430_AGH3=
Col0402IMG_2p_2_lm&amp;H=3DYSBVQ4C0QJBIBWVPJ0Q8WPC5OIEA&amp;ref_=3Dpe_12577=
5000_1044873430_AGH3Col0402IMG_2p_2_lm" target=3D"_blank"><img src=3D"https=
://m.media-amazon.com/images/I/41qMQ5yqBZL._SR276,276_.jpg" alt=3D"Marsail =
Ergonomic PU-Leather Office Chair: 5 Settings Lumbar Support, Executive Off=
ice Chair Height Adjustable with Padded Flip-up Arms, Executive Desk Chair =
for Working Study-Black" align=3D"center" width=3D"138" height=3D"138" styl=
e=3D"width:100%;height:auto;max-width:138px;max-height:138px"></a></td></tr=
></tbody></table><div style=3D"padding:4px"> <table role=3D"presentation" b=
order=3D"0" cellpadding=3D"0" cellspacing=3D"0" style=3D"padding-bottom:4px=
"><tbody><tr><td><span style=3D"font-weight:400;font-size:13px;line-height:=
16px;color:#cc0c39;display:inline-block;margin-right:4px">-26% </span><span=
 style=3D"font-size:13px;font-weight:400;line-height:16px;color:#0f1111;dir=
ection:ltr!important">$148.05 </span></td></tr></tbody></table><div style=
=3D"font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15p=
x;font-weight:400;line-height:20px;text-align:left;color:#0f1111"><span cla=
ss=3D"m_1323047936219179829rio-text"><div style=3D"width:174px;overflow:hid=
den;text-overflow:ellipsis;white-space:nowrap;max-width:100%">Marsail Ergon=
omic PU-Leather...</div></span></div></div></td></tr></tbody></table></td> =
 </tr></tbody></table></td></tr></tbody></table></div>        </td></tr></t=
body></table></div><div style=3D"background:#ffffff;background-color:#fffff=
f;margin:0px auto;max-width:600px"><table align=3D"center" border=3D"0" cel=
lpadding=3D"0" cellspacing=3D"0" role=3D"presentation" style=3D"background:=
#ffffff;background-color:#ffffff;width:100%"><tbody><tr><td style=3D"direct=
ion:ltr;font-size:0px;padding:4px 0px 0px 0px;text-align:left"> <div class=
=3D"m_1323047936219179829footerCard" style=3D"background:#f0f2f2;background=
-color:#f0f2f2;margin:0px auto;max-width:600px"><table align=3D"center" bor=
der=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" style=
=3D"background:#f0f2f2;background-color:#f0f2f2;width:100%"><tbody><tr><td =
style=3D"direction:ltr;font-size:0px;padding:0;text-align:left"><div style=
=3D"margin:0px auto;max-width:600px"><table align=3D"center" border=3D"0" c=
ellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" style=3D"width:100=
%"><tbody><tr><td style=3D"direction:ltr;font-size:0px;padding:20px 16px 0;=
text-align:left"><div class=3D"m_1323047936219179829mj-column-per-100" styl=
e=3D"font-size:0px;text-align:left;direction:ltr;display:inline-block;verti=
cal-align:top;width:100%"><table border=3D"0" cellpadding=3D"0" cellspacing=
=3D"0" role=3D"presentation" width=3D"100%"><tbody><tr><td style=3D"vertica=
l-align:top;padding:0"><table border=3D"0" cellpadding=3D"0" cellspacing=3D=
"0" role=3D"presentation" width=3D"100%"><tbody><tr><td align=3D"left" styl=
e=3D"font-size:0px;padding:0;word-break:break-word"><div style=3D"font-fami=
ly:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:14px;font-weight=
:400;line-height:20px;text-align:left;color:#494d4d">=C2=A92025 Amazon.com,=
 Inc. or its affiliates. Amazon and all related marks are trademarks of Ama=
zon.com, Inc. or its affiliates, Amazon.com, Inc. 410 Terry Avenue N., Seat=
tle, WA 98109.</div></td></tr></tbody></table></td></tr></tbody></table></d=
iv></td></tr></tbody></table></div>  <div style=3D"margin:0px auto;max-widt=
h:600px"><table align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=
=3D"0" role=3D"presentation" style=3D"width:100%"><tbody><tr><td style=3D"d=
irection:ltr;font-size:0px;padding:20px 16px 0;text-align:left"><div class=
=3D"m_1323047936219179829mj-column-per-100" style=3D"font-size:0px;text-ali=
gn:left;direction:ltr;display:inline-block;vertical-align:top;width:100%"><=
table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation=
" width=3D"100%"><tbody><tr><td style=3D"vertical-align:top;padding:0"><tab=
le border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" w=
idth=3D"100%"><tbody><tr><td align=3D"left" style=3D"font-size:0px;padding:=
0;word-break:break-word"><div style=3D"font-family:Ember,&#39;Amazon Ember&=
#39;,Arial,sans-serif;font-size:14px;font-weight:400;line-height:20px;text-=
align:left;color:#494d4d"><p>By placing your order, you agree to Amazon.com=
=E2=80=99s <a href=3D"https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&am=
p;K=3D1NG4SOUTCDRLG&amp;M=3Durn:rtn:msg:20250324030915cb5e9fe645494afa90397=
e25ed80p0na&amp;R=3D174IX2T9N0HTJ&amp;T=3DC&amp;U=3Dhttps%3A%2F%2Fwww.amazo=
n.com%2Fgp%2Fhelp%2Fcustomer%2Fdisplay.html%3Fie%3DUTF8%26nodeId%3D468496%2=
6ref_%3Dpe_125775000_1044873430_fed_roclt_default_policy&amp;H=3DATKG9JUATC=
L3R3VV2ENTLHIXSAUA&amp;ref_=3Dpe_125775000_1044873430_fed_roclt_default_pol=
icy" rel=3D"nofollow" target=3D"_blank">Privacy Notice</a> and <a href=3D"h=
ttps://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&amp;K=3D1NG4SOUTCDRLG&amp=
;M=3Durn:rtn:msg:20250324030915cb5e9fe645494afa90397e25ed80p0na&amp;R=3DTHB=
JMVWLUL2U&amp;T=3DC&amp;U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fhelp%2Fcust=
omer%2Fdisplay.html%3Fie%3DUTF8%26nodeId%3D508088%26ref_%3Dpe_125775000_104=
4873430_fed_roclt_default_policy&amp;H=3D1KOYJKLA5ABCBITEP4O2QCDX7ZOA&amp;r=
ef_=3Dpe_125775000_1044873430_fed_roclt_default_policy" rel=3D"nofollow" ta=
rget=3D"_blank"> Conditions of Use</a>. Unless otherwise noted, items sold =
by Amazon.com are subject to sales tax in select states in accordance with =
the applicable laws of that state. If your order contains one or more items=
 from a seller other than Amazon.com, it may be subject to state and local =
sales tax, depending upon the seller&#39;s business policies and the locati=
on of their operations. Learn more about <a href=3D"https://www.amazon.com/=
gp/r.html?C=3D3E92MSAD2LHAU&amp;K=3D1NG4SOUTCDRLG&amp;M=3Durn:rtn:msg:20250=
324030915cb5e9fe645494afa90397e25ed80p0na&amp;R=3D2RV1METE1ZZAA&amp;T=3DC&a=
mp;U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fhelp%2Fcustomer%2Fdisplay.html%3=
Fie%3DUTF8%26nodeId%3D202029700%26ref_%3Dpe_125775000_1044873430_fed_roclt_=
default_policy&amp;H=3DIMTVYTJP5MUXNX8CAK8JUZOPUDQA&amp;ref_=3Dpe_125775000=
_1044873430_fed_roclt_default_policy" rel=3D"nofollow" target=3D"_blank">ta=
x and seller information</a>.</p>
<p>Items in this order may be subject to California&#39;s Electronic Waste =
Recycling Act. If any items in this order are subject to that Act, the sell=
er of that item has elected to pay any fees due on your behalf.</p></div></=
td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody><=
/table></div> <div style=3D"margin:0px auto;max-width:600px"><table align=
=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presen=
tation" style=3D"width:100%"><tbody><tr><td style=3D"direction:ltr;font-siz=
e:0px;padding:14px 16px 4px 0;text-align:left"><div class=3D"m_132304793621=
9179829mj-column-per-100" style=3D"font-size:0px;text-align:left;direction:=
ltr;display:inline-block;vertical-align:top;width:100%"><table border=3D"0"=
 cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" width=3D"100%"><=
tbody><tr><td style=3D"vertical-align:top;padding:0"><table border=3D"0" ce=
llpadding=3D"0" cellspacing=3D"0" role=3D"presentation" width=3D"100%"><tbo=
dy><tr><td><table style=3D"height:43px;width:86px"><tbody><tr><td><img src=
=3D"https://m.media-amazon.com/images/G/01/outbound/OutboundTemplates/Smile=
_Logo_Light._BG240,242,242_.png" alt=3D"Amazon.com" height=3D"43" width=3D"=
86" align=3D"left"></td></tr></tbody></table><table style=3D"height:43px;wi=
dth:86px;display:none"><tbody><tr><td><img src=3D"https://m.media-amazon.co=
m/images/G/01/outbound/OutboundTemplates/Smile_Logo_Dark.png" alt=3D"Amazon=
.com" height=3D"43" width=3D"86" align=3D"left"></td></tr></tbody></table><=
/td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody>=
</table></div></td></tr></tbody></table></div> </td></tr></tbody></table></=
div></div><img width=3D"1" height=3D"1" src=3D"https://www.amazon.com/gp/r.=
html?C=3D3E92MSAD2LHAU&amp;K=3D1NG4SOUTCDRLG&amp;M=3Durn:rtn:msg:2025032403=
0915cb5e9fe645494afa90397e25ed80p0na&amp;R=3D3GJ4VQ9UCX4BX&amp;T=3DE&amp;U=
=3Dhttps%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FG%2F01%2Fnav%2F=
transp.gif&amp;H=3DPHKAU1ZFAQGGVV7WERXUC9WG1ZWA&amp;ref_=3Dpe_125775000_104=
4873430_open"></div></div></div></div>

--000000000000e76fca0631433822--`
