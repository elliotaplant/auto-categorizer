const fs = require("fs");
const path = require("path");

// Dynamically import the example email from your test file
async function main() {
  try {
    const [productName, orderId, price] = process.argv.slice(2);
    if (!productName || !orderId || !price) {
      throw new Error(
        "missing one of: productName, orderId, price. Those should be args"
      );
    }
    const emailContent = exampleEmail();
    if (Math.random() < 2) return;

    // Send the email to your API endpoint
    console.log("Sending request to API...");
    const response = await fetch(
      "https://auto-categorizer.elliotplant.workers.dev/api/register-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: emailContent,
      }
    );

    // Log the response
    const responseText = await response.text();
    console.log(`Response status: ${response.status}`);
    console.log(`Response body: ${responseText}`);

    // After success, retrieve and display all orders
    console.log("\nFetching current orders from database...");
    const ordersResponse = await fetch(
      "https://auto-categorizer.elliotplant.workers.dev/api/orders"
    );
    const ordersData = await ordersResponse.json();
    console.log("Current Orders in Database:");
    console.log(JSON.stringify(ordersData, null, 2));
  } catch (error) {
    console.error("Error:", error);
  }
}

main();

function exampleEmail(productName, orderId, price) {
  console.log("{productName, orderId, price}", { productName, orderId, price });
  return `
Received: from mail-oi1-x22f.google.com (2607:f8b0:4864:20::22f)
        by cloudflare-email.net (unknown) id F9o1UdAl7qKf
        for <amazon-categorizer@elliotplant.com>; Mon, 24 Mar 2025 23:14:40 +0000
ARC-Seal: i=1; a=rsa-sha256; s=cf2024-1; d=cloudflare-email.net; cv=none;
	b=S7SXtOtOYmf0Di3ETvmajAujyQyJvCzALWFCdYhjbB1kkfPqm8VYFIrKyt3xS1fmW886+HS9C
	87rub3x9W5GcW9fq03b5W1BndK3ss5Kaq/seEPwTCGC3jZ3BZg0noFSGW8waV8gE09n75/MsUJN
	uJ3C4gn7igknv02WC3p7GoFNpRZhZ7+wPYnApu/joUtIfUUOckkie87x+zDhE8a8lNEFBoNA6lR
	jPfWxJFNIhr+lVXpkqiIqTekt83IkiKd5/ewQ6SZ3CoA+cpGuh89v4r1htRlBePXqcNxDirUDZR
	8Jb4t592xvcrr+z7+luTsLCrFY38xLASxk5NbWNFvaqQ==;
ARC-Message-Signature: i=1; a=rsa-sha256; s=cf2024-1; d=cloudflare-email.net; c=relaxed/relaxed;
	h=To:Subject:Date:From:In-Reply-To:References:reply-to:cc:resent-date
	:resent-from:resent-to:resent-cc:list-id:list-help:list-unsubscribe
	:list-subscribe:list-post:list-owner:list-archive; t=1742858081;
	x=1743462881; bh=/C3VP+1QOZrZFuAx20jL5l6TiUEAhrXfZqJ3pkqmIdA=; b=gNZQjKNoVd
	wy2Xk4SrlhEwEA2fVZLmX0dAipPrumB5VmbokI5pZz9SSPkQZDIJt5/SxqTBE4PmOjdZdH45W/t
	2uqgJBPGam64nP/2meHYojdZCs4duinpBr4Lh5aFx+7h1BK19neORx8M7SLFt1laemJM39Of9We
	bceLeNn5ZeijlJoyDsX2jfMvSOvxHmZncGaHpqQ79uo2xvi7L+s3/t6k3sSS482VPo6B6e68or+
	S4wKj4x3Fl48UWLVxoZaYpJaO73PaCB2qi8G5+h+Mls/lpPom8coz8aTtD4pt1HWMxL3JqV3u75
	txp+TWkpuVSvhnvSffUPjP6RNY1huNjQ==;
ARC-Authentication-Results: i=1; mx.cloudflare.net;
	dkim=pass header.d=gmail.com header.s=20230601 header.b=V3U4n/NR;
	dmarc=pass header.from=gmail.com policy.dmarc=none;
	spf=none (mx.cloudflare.net: no SPF records found for postmaster@mail-oi1-x22f.google.com) smtp.helo=mail-oi1-x22f.google.com;
	spf=pass (mx.cloudflare.net: domain of elliotaplant@gmail.com designates 2607:f8b0:4864:20::22f as permitted sender) smtp.mailfrom=elliotaplant@gmail.com;
	arc=none smtp.remote-ip=2607:f8b0:4864:20::22f
Received-SPF: pass (mx.cloudflare.net: domain of elliotaplant@gmail.com designates 2607:f8b0:4864:20::22f as permitted sender)
	receiver=mx.cloudflare.net; client-ip=2607:f8b0:4864:20::22f; envelope-from="elliotaplant@gmail.com"; helo=mail-oi1-x22f.google.com;
Authentication-Results: mx.cloudflare.net;
	dkim=pass header.d=gmail.com header.s=20230601 header.b=V3U4n/NR;
	dmarc=pass header.from=gmail.com policy.dmarc=none;
	spf=none (mx.cloudflare.net: no SPF records found for postmaster@mail-oi1-x22f.google.com) smtp.helo=mail-oi1-x22f.google.com;
	spf=pass (mx.cloudflare.net: domain of elliotaplant@gmail.com designates 2607:f8b0:4864:20::22f as permitted sender) smtp.mailfrom=elliotaplant@gmail.com;
	arc=none smtp.remote-ip=2607:f8b0:4864:20::22f
X-CF-SpamH-Score: 2
Received: by mail-oi1-x22f.google.com with SMTP id 5614622812f47-3fa6c54cc1aso3670548b6e.1
        for <amazon-categorizer@elliotplant.com>; Mon, 24 Mar 2025 16:14:40 -0700 (PDT)
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
        d=gmail.com; s=20230601; t=1742858080; x=1743462880; darn=elliotplant.com;
        h=to:subject:message-id:date:from:in-reply-to:references:mime-version
         :from:to:cc:subject:date:message-id:reply-to;
        bh=/C3VP+1QOZrZFuAx20jL5l6TiUEAhrXfZqJ3pkqmIdA=;
        b=V3U4n/NRYnUfAESXxmDkwqNxhAtsE2wpjKWRvJXtVCgKTfIfxgma98nGOnFRYEWPaC
         Ql1IRM3KszuTKROL1ZY2LgOKvejB5oN0nmTJfRAiUehI6Wfl65Uhf7Wa6Mk9dg+q3uV9
         6RTiRbxTQvvQwrQb0UrNnxPJV7F8gusr3sGk/mtqWQjiBnCU2AZ3hM64MnV23TO4sigL
         g50OlKmNS2n23arhWrJ6KgwYebpZAKxRQWrY4NidIDpRuuyizwvA9rcU+d7aXMLCDyEg
         27SDZYRD3qAYNF1oZXECpuZFOS+7qXSCj0qa6BJUVbsZNxJffVssgT/cAktbrDi+a/7Z
         /tkw==
X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
        d=1e100.net; s=20230601; t=1742858080; x=1743462880;
        h=to:subject:message-id:date:from:in-reply-to:references:mime-version
         :x-gm-message-state:from:to:cc:subject:date:message-id:reply-to;
        bh=/C3VP+1QOZrZFuAx20jL5l6TiUEAhrXfZqJ3pkqmIdA=;
        b=dlDy+5y7rUzYWwwC4Eu8WNW5R8l/3r2Mqri7X+pkhaJydCdsWrd7KPWc+iJf49MGBg
         rSyP4wc4IGBMx88qoA+snxNLLIFGQl0PToCcwylvfXoaHGHz17fyHAIr4LH5tAFDSyHL
         GbyGJ/ZYaen3ueNSL6/eS3jZszdGDUrUGo/J57AD3h44Gpil9gUhA1OcXYeGGpoM7Ph7
         Q4Z21KLXvsWSVBJgD4l4kXS8NxNq39YRDraeIOAWwKH8/OKcAlPlpTmbPYERPeTgNNzx
         bur0894fys/na5b+/7diiXSkXNWTJHzABmnSQ6a73kI/22c5IxsINfkEFsJiU/rSuIxm
         VOpg==
X-Gm-Message-State: AOJu0YxjTzWoOjRHx1eFKJMZPrGHYWI8dcRp4uhzG3/vc60xyv235f9H
	i4HiJ+r6TZ6h5Jz+CsVBKOPQmSvilhN/tVBWdKIEmvlKXVq5gFVRQycl2+rszwHKdabFlLdlhnf
	x1zZ8jkwyNrnwPdLphN7Q7qpnSa9W2D42
X-Gm-Gg: ASbGncvXlkF0/grM/38Gatd9j91tnhA8kYppyiQyr2njMj+6GoK+6bf9+iHvtUOphgX
	a4DsfKmrJMzCbDw6eJfkpIkNAAu6qviS0He3nDynxONRt6xqheCp0cHAnM2bHCmGynj8CBav0+H
	RLXYOgA9uukqCyBpByO4+FySj+AdA=
X-Google-Smtp-Source: AGHT+IHJpLtEDzvxuynmSJb7Lt1hXdCoLmozLMuycz/gonsc5+g2fSAzM1hQ+UxBavopl6OnrafvcFa7mM7AZGS1pFs=
X-Received: by 2002:a05:6808:1899:b0:3fb:dedf:289c with SMTP id
 5614622812f47-3febf6ff8b0mr9306401b6e.4.1742858079429; Mon, 24 Mar 2025
 16:14:39 -0700 (PDT)
MIME-Version: 1.0
References: <01000195c86ea00f-7ef20e27-4d4d-4012-b7ce-432fa7ff7c2b-000000@email.amazonses.com>
 <CAFo8zPw8zo7Uj_yP9un4JL8+iO=Dq4z7KYsuwoKMcMfJAU1JdA@mail.gmail.com>
In-Reply-To: <CAFo8zPw8zo7Uj_yP9un4JL8+iO=Dq4z7KYsuwoKMcMfJAU1JdA@mail.gmail.com>
From: Elliot Plant <elliotaplant@gmail.com>
Date: Mon, 24 Mar 2025 16:14:26 -0700
X-Gm-Features: AQ5f1JrF-pXabF70TVhR9tQ7YQLdlAebOuVUxL1TihzPQFqhTZ9ropMWy3FceUw
Message-ID: <CAFo8zPyyWqEtYoFi2DsK4+myaSD6+UgAbmFwRp6cSWP=4Wf3Yg@mail.gmail.com>
Subject: Fwd: Ordered: "${productName}"
To: amazon-categorizer@elliotplant.com
Content-Type: multipart/alternative; boundary="000000000000b7ee4606311ec4ed"

--000000000000b7ee4606311ec4ed
Content-Type: text/plain; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

---------- Forwarded message ---------
From: Elliot Plant <elliotaplant@gmail.com>
Date: Mon, Mar 24, 2025 at 4:03=E2=80=AFPM
Subject: Fwd: Ordered: "${productName}"
To: <amazon-categorizer@elliotplant.com>




---------- Forwarded message ---------
From: Amazon.com <auto-confirm@amazon.com>
Date: Mon, Mar 24, 2025 at 6:54=E2=80=AFAM
Subject: Ordered: "${productName}"
To: <elliotaplant@gmail.com>


Ordered: "${productName}"=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=
=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=
=8F =E2=80=8C
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
=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=
=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=
=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F
=E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=
=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=
=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C  =
 =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C
=E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=
=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=87 =C2=AD=CD=8F =E2=80=8C   =E2=80=
=87 =C2=AD
Your Orders
<https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&R=3DZSRGHIC6SDI&T=
=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss%2Forder-history%3Fref_%3Dp=
e_125775000_1044873430_TLH0001BT_fed_yo_default&H=3DECC1UGYSRQY08H2FTC4OBUO=
CMGUA&ref_=3Dpe_125775000_1044873430_TLH0001BT_fed_yo_default>
Your Account
<https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&R=3DO2QSKH7X1LLW&=
T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fyour-account%3Fref_%3Dpe_125775000=
_1044873430_TLH0002BT_fed_ya_default&H=3DBDGKSKJUU7Z9MA8LVMMBQYP8E0QA&ref_=
=3Dpe_125775000_1044873430_TLH0002BT_fed_ya_default>
Buy Again
<https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&R=3D3LDYT90V0GSRP=
&T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fbuyagain%3Fref_%3Dpe_1257750=
00_1044873430_TLH0003BT_fed_bia_default&H=3DOYOPZYMEVO92CTVVQRBAIDFWML4A&re=
f_=3Dpe_125775000_1044873430_TLH0003BT_fed_bia_default>
Thanks for your order, Elliot!
Ordered

Shipped

Out for delivery

Delivered

Arriving Thursday
*Elliot - OAKLAND, CA*
Order # =E2=80=AB${orderId}
View or edit order
<https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&R=3D2G4YA82P66LM3=
&T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss%2Forder-details%3ForderI=
D%3D${orderId}%26ref_%3Dpe_125775000_1044873430_fed_veo&H=3DHAPBMG=
SNHKIXDQEGXXYRZPQSL0MA&ref_=3Dpe_125775000_1044873430_fed_veo>

[image: ${productName}]
<https://www.amazon.com/gp/f.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&R=3D1QO9SFAPUTA16=
&T=3DC&U=3D%2Fdp%2FB079ZV4V3C%3Fref_%3Dpe_125775000_1044873430_fed_asin_tit=
le&H=3DWIMANNP8LF8RJQO50T5NBNE0LD0A&ref_=3Dpe_125775000_1044873430_fed_asin=
_title>
${productName}
<https://www.amazon.com/gp/f.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&R=3D3JGZOL9XEVAGF=
&T=3DC&U=3D%2Fdp%2FB079ZV4V3C%3Fref_%3Dpe_125775000_1044873430_fed_asin_tit=
le&H=3DWBNYTGXAKGXXRZGFINEQDRAJPQCA&ref_=3Dpe_125775000_1044873430_fed_asin=
_title>
Quantity: 1
$613

Total $${price}

Keep shopping for
[image: Universal Convertible Car Seat Cover - Backseat Shade & Sun Shade
Visor Extender for Baby & Toddler - Rear & Forward Facing]
<https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&R=3DXHXAKSNDZ1HK&=
T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB0DH37QQZN%2F%3Fref=
_%3Dpe_125775000_1044873430_AGH3Col0400IMG_2p_0_lm&H=3DJTXBBZMB4RTT8VJGGN4G=
RQZ1DNCA&ref_=3Dpe_125775000_1044873430_AGH3Col0400IMG_2p_0_lm>
$28.99
Universal Convertible Car Seat...

[image: kinder Fluff Car Window Shade (4Pack)-The Only Certified Car Window
Sun Shade for Baby Proven to Block 99.95% UVR - Mom's Choice Gold Award -
Car Seat Sun Protection - Standard]
<https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&R=3D1PAIVOLKQQNBS=
&T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB00ZOKJVAG%2F%3Fre=
f_%3Dpe_125775000_1044873430_AGH3Col0401IMG_2p_1_lm&H=3D8R2AEWTJAJOQJLIKPVB=
52WZKL8YA&ref_=3Dpe_125775000_1044873430_AGH3Col0401IMG_2p_1_lm>
$14.95
kinder Fluff Car Window Shade...

[image: Nightcap The Original Drink Cover Scrunchie, 2 Pack =E2=80=93 As Se=
en On
Shark Tank And TikTok - Reusable - Wear On Wrist Or In Hair, Prevent Drink
Spiking - Sanitary Pocket Keeps Cover Clean =E2=80=93 Black]
<https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&R=3D2FHYUYF2VUYZ9=
&T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB093296RCV%2F%3Fre=
f_%3Dpe_125775000_1044873430_AGH3Col0402IMG_2p_2_lm&H=3DQQWLLM60X6LLHSRDFGS=
XGSRAFI0A&ref_=3Dpe_125775000_1044873430_AGH3Col0402IMG_2p_2_lm>
-24% $18.99
Nightcap The Original Drink...
=C2=A92025 Amazon.com, Inc. or its affiliates. Amazon and all related marks=
 are
trademarks of Amazon.com, Inc. or its affiliates, Amazon.com, Inc. 410
Terry Avenue N., Seattle, WA 98109.

By placing your order, you agree to Amazon.com=E2=80=99s Privacy Notice
<https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&R=3D3K3ETTJRKYY7M=
&T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fhelp%2Fcustomer%2Fdisplay.ht=
ml%3Fie%3DUTF8%26nodeId%3D468496%26ref_%3Dpe_125775000_1044873430_fed_roclt=
_default_policy&H=3D3WZANOYMAAKZNIJGVDZ6A4QQ9IAA&ref_=3Dpe_125775000_104487=
3430_fed_roclt_default_policy>
and Conditions of Use
<https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&R=3D31MYR46CF9COX=
&T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fhelp%2Fcustomer%2Fdisplay.ht=
ml%3Fie%3DUTF8%26nodeId%3D508088%26ref_%3Dpe_125775000_1044873430_fed_roclt=
_default_policy&H=3D53APDUCXI1P6ARYWU2YQIJD6WFEA&ref_=3Dpe_125775000_104487=
3430_fed_roclt_default_policy>.
Unless otherwise noted, items sold by Amazon.com are subject to sales tax
in select states in accordance with the applicable laws of that state. If
your order contains one or more items from a seller other than Amazon.com,
it may be subject to state and local sales tax, depending upon the seller's
business policies and the location of their operations. Learn more about ta=
x
and seller information
<https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&K=3D1NG4SOUTCDRLG&M=3Du=
rn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&R=3DMY7CD5DVOOPC&=
T=3DC&U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fhelp%2Fcustomer%2Fdisplay.htm=
l%3Fie%3DUTF8%26nodeId%3D202029700%26ref_%3Dpe_125775000_1044873430_fed_roc=
lt_default_policy&H=3DYTUXPGZAARVQUTGZKFB3GSJV3ICA&ref_=3Dpe_125775000_1044=
873430_fed_roclt_default_policy>
.

Items in this order may be subject to California's Electronic Waste
Recycling Act. If any items in this order are subject to that Act, the
seller of that item has elected to pay any fees due on your behalf.
[image: Amazon.com]
[image: Amazon.com]

--000000000000b7ee4606311ec4ed
Content-Type: text/html; charset="UTF-8"
Content-Transfer-Encoding: quoted-printable

<div dir=3D"ltr"><br><br><div class=3D"gmail_quote gmail_quote_container"><=
div dir=3D"ltr" class=3D"gmail_attr">---------- Forwarded message ---------=
<br>From: <strong class=3D"gmail_sendername" dir=3D"auto">Elliot Plant</str=
ong> <span dir=3D"auto">&lt;<a href=3D"mailto:elliotaplant@gmail.com">ellio=
taplant@gmail.com</a>&gt;</span><br>Date: Mon, Mar 24, 2025 at 4:03=E2=80=
=AFPM<br>Subject: Fwd: Ordered: &quot;${productName}...&quot;<b=
r>To:  &lt;<a href=3D"mailto:amazon-categorizer@elliotplant.com">amazon-cat=
egorizer@elliotplant.com</a>&gt;<br></div><br><br><div dir=3D"ltr"><br><br>=
<div class=3D"gmail_quote"><div dir=3D"ltr" class=3D"gmail_attr">----------=
 Forwarded message ---------<br>From: <strong class=3D"gmail_sendername" di=
r=3D"auto">Amazon.com</strong> <span dir=3D"auto">&lt;<a href=3D"mailto:aut=
o-confirm@amazon.com" target=3D"_blank">auto-confirm@amazon.com</a>&gt;</sp=
an><br>Date: Mon, Mar 24, 2025 at 6:54=E2=80=AFAM<br>Subject: Ordered: &quo=
t;${productName}"mailto:elliota=
plant@gmail.com" target=3D"_blank">elliotaplant@gmail.com</a>&gt;<br></div>=
<br><br><div><u></u><div style=3D"word-spacing:normal"><img width=3D"1" hei=
ght=3D"1" src=3D"https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&amp;K=
=3D1NG4SOUTCDRLG&amp;M=3Durn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b4=
8310p0na&amp;R=3D126PID321E1N5&amp;T=3DO&amp;U=3Dhttps%3A%2F%2Fimages-na.ss=
l-images-amazon.com%2Fimages%2FG%2F01%2Fnav%2Ftransp.gif&amp;H=3DKCWJE5JROA=
81DGV4YLYSQPRABYGA&amp;ref_=3Dpe_125775000_1044873430_opens"><div style=3D"=
display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max=
-width:0px;opacity:0;overflow:hidden">Ordered: &quot; =
with...&quot;=CD=8F =E2=80=8C =C2=A0 =E2=80=87 =C2=AD=CD=8F =E2=80=8C =C2=
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
div><div lang=3D"en" dir=3D"auto"><div style=3D"background:#ffffff;backgrou=
nd-color:#ffffff;margin:0px auto;max-width:600px"><table align=3D"center" b=
order=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" style=
=3D"background:#ffffff;background-color:#ffffff;width:100%"><tbody><tr><td =
style=3D"direction:ltr;font-size:0px;padding:0px 0px 4px 0px;text-align:lef=
t"> <div style=3D"background:#ffffff;background-color:#ffffff;margin:0px au=
to;border-radius:4px;max-width:600px"><table align=3D"center" border=3D"0" =
cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" style=3D"backgrou=
nd:#ffffff;background-color:#ffffff;width:100%;border-radius:4px"><tbody><t=
r><td style=3D"direction:ltr;font-size:0px;padding:0px 0px 0px 0px;text-ali=
gn:left"><div style=3D"background:#232f3e;background-color:#232f3e;margin:0=
px auto;max-width:600px"><table align=3D"center" border=3D"0" cellpadding=
=3D"0" cellspacing=3D"0" role=3D"presentation" style=3D"background:#232f3e;=
background-color:#232f3e;width:100%"><tbody><tr><td style=3D"direction:ltr;=
font-size:0px;padding:8px 4px;text-align:left"><div style=3D"font-size:0;li=
ne-height:0;text-align:left;display:inline-block;width:100%;direction:ltr">=
<div style=3D"font-size:0px;text-align:left;direction:ltr;display:inline-bl=
ock;vertical-align:middle;width:100%"><table border=3D"0" cellpadding=3D"0"=
 cellspacing=3D"0" role=3D"presentation" width=3D"100%"><tbody><tr><td styl=
e=3D"vertical-align:middle;padding:0"><table border=3D"0" cellpadding=3D"0"=
 cellspacing=3D"0" role=3D"presentation" width=3D"100%"><tbody><tr><td alig=
n=3D"center" style=3D"font-size:0px;padding:0;word-break:break-word"><div s=
tyle=3D"font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size=
:14px;font-weight:bold;letter-spacing:-.02em;line-height:20px;text-align:ce=
nter;color:#000000"><u></u>    <u></u><a href=3D"https://www.amazon.com/gp/=
r.html?C=3D3E92MSAD2LHAU&amp;K=3D1NG4SOUTCDRLG&amp;M=3Durn:rtn:msg:20250324=
1354076f0c20a445c047ccb39cd7b48310p0na&amp;R=3DZSRGHIC6SDI&amp;T=3DC&amp;U=
=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss%2Forder-history%3Fref_%3Dpe_1257=
75000_1044873430_TLH0001BT_fed_yo_default&amp;H=3DECC1UGYSRQY08H2FTC4OBUOCM=
GUA&amp;ref_=3Dpe_125775000_1044873430_TLH0001BT_fed_yo_default" style=3D"c=
olor:#ffffff;text-decoration:none;white-space:nowrap!important" target=3D"_=
blank">Your Orders</a>=C2=A0=C2=A0=C2=A0=C2=A0=C2=A0=C2=A0 <a href=3D"https=
://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&amp;K=3D1NG4SOUTCDRLG&amp;M=
=3Durn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&amp;R=3DO2QSK=
H7X1LLW&amp;T=3DC&amp;U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fyour-account%3Fref=
_%3Dpe_125775000_1044873430_TLH0002BT_fed_ya_default&amp;H=3DBDGKSKJUU7Z9MA=
8LVMMBQYP8E0QA&amp;ref_=3Dpe_125775000_1044873430_TLH0002BT_fed_ya_default"=
 style=3D"color:#ffffff;text-decoration:none;white-space:nowrap!important" =
target=3D"_blank">Your Account</a>=C2=A0=C2=A0=C2=A0=C2=A0=C2=A0=C2=A0 <a h=
ref=3D"https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&amp;K=3D1NG4SOUTC=
DRLG&amp;M=3Durn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&amp=
;R=3D3LDYT90V0GSRP&amp;T=3DC&amp;U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fbu=
yagain%3Fref_%3Dpe_125775000_1044873430_TLH0003BT_fed_bia_default&amp;H=3DO=
YOPZYMEVO92CTVVQRBAIDFWML4A&amp;ref_=3Dpe_125775000_1044873430_TLH0003BT_fe=
d_bia_default" style=3D"color:#ffffff;text-decoration:none;white-space:nowr=
ap!important" target=3D"_blank">Buy Again</a><u></u><u></u></div></td></tr>=
</tbody></table></td></tr></tbody></table></div></div></td></tr></tbody></t=
able></div></td></tr></tbody></table></div> </td></tr></tbody></table></div=
><div style=3D"background:#ffffff;background-color:#ffffff;margin:0px auto;=
max-width:600px"><table align=3D"center" border=3D"0" cellpadding=3D"0" cel=
lspacing=3D"0" role=3D"presentation" style=3D"background:#ffffff;background=
-color:#ffffff;width:100%"><tbody><tr><td style=3D"direction:ltr;font-size:=
0px;padding:4px 8px 4px 8px;text-align:left"> <div style=3D"background:#fff=
fff;background-color:#ffffff;margin:0px auto;border-radius:4px;max-width:58=
4px"><table align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"=
0" role=3D"presentation" style=3D"background:#ffffff;background-color:#ffff=
ff;width:100%;border-radius:4px"><tbody><tr><td style=3D"direction:ltr;font=
-size:0px;padding:12px 8px 16px 8px;text-align:left">  <div style=3D"margin=
:0px auto;max-width:568px"><table align=3D"center" border=3D"0" cellpadding=
=3D"0" cellspacing=3D"0" role=3D"presentation" style=3D"width:100%"><tbody>=
<tr><td style=3D"direction:ltr;font-size:0px;padding:0;padding-bottom:10px;=
text-align:left"><div style=3D"font-family:Ember,&#39;Amazon Ember&#39;,Ari=
al,sans-serif;font-size:15px;line-height:1;text-align:center;color:#000000"=
><h2 style=3D"margin:0;padding:0;font-family:Ember,&#39;Amazon Ember&#39;,A=
rial,sans-serif;font-weight:700;font-size:18px;line-height:22px;color:#0f11=
11">Thanks for your order, Elliot!</h2></div></td></tr></tbody></table></di=
v>   <table cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" border=3D"0"=
 style=3D"color:#000000;font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans=
-serif;font-size:15px;line-height:22px;table-layout:auto;width:100%;border:=
none"><tbody><tr><td width=3D"25%" valign=3D"top"><table cellpadding=3D"0" =
cellspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;font-f=
amily:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;line-hei=
ght:22px;table-layout:auto;width:100%;border:none"><tbody><tr><td style=3D"=
height:18px"><table cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" bord=
er=3D"0" style=3D"color:#000000;font-family:Ember,&#39;Amazon Ember&#39;,Ar=
ial,sans-serif;font-size:15px;line-height:22px;table-layout:auto;width:100%=
;border:none"><tbody><tr><td width=3D"50%" height=3D"18"> <table cellpaddin=
g=3D"0" cellspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#00000=
0;font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;=
line-height:22px;table-layout:auto;width:100%;border:none"><tbody><tr><td h=
eight=3D"7"></td></tr><tr><td height=3D"4"></td></tr><tr><td height=3D"7"><=
/td></tr></tbody></table> </td><td height=3D"18"> <table cellpadding=3D"0" =
cellspacing=3D"0" width=3D"18" border=3D"0" style=3D"color:#000000;font-fam=
ily:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;line-heigh=
t:22px;table-layout:auto;width:18;border:none"><tbody><tr><td width=3D"18" =
height=3D"18"><div style=3D"border-radius:18px;background:#1196ab;line-heig=
ht:17px;width:18px;height:18px;text-align:center"><img src=3D"https://m.med=
ia-amazon.com/images/G/01/outbound/etc/steptracker-checkmark.png" width=3D"=
12" height=3D"10" style=3D"width:12px;height:10px"></div></td></tr></tbody>=
</table> </td><td width=3D"50%" height=3D"18"> <table cellpadding=3D"0" cel=
lspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;font-fami=
ly:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;line-height=
:22px;table-layout:auto;width:100%;border:none"><tbody><tr><td height=3D"7"=
></td></tr><tr><td height=3D"4" style=3D"background:#e9e7e7"><div style=3D"=
width:100%;height:0;border-width:0;background:#1196ab;border-bottom:4px sol=
id #1196ab;border-radius:0 2px 2px 0"></div></td></tr><tr><td height=3D"7">=
</td></tr></tbody></table> </td></tr></tbody></table></td></tr><tr><td heig=
ht=3D"5"></td></tr><tr><td><div style=3D"font-family:Ember,&#39;Amazon Embe=
r&#39;,Arial,sans-serif;font-size:15px;font-weight:700;line-height:21px;tex=
t-align:center;color:#0f1111"><span>Ordered</span></div>  </td></tr></tbody=
></table></td><td width=3D"25%" valign=3D"top"><table cellpadding=3D"0" cel=
lspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;font-fami=
ly:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;line-height=
:22px;table-layout:auto;width:100%;border:none"><tbody><tr><td style=3D"hei=
ght:18px"><table cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" border=
=3D"0" style=3D"color:#000000;font-family:Ember,&#39;Amazon Ember&#39;,Aria=
l,sans-serif;font-size:15px;line-height:22px;table-layout:auto;width:100%;b=
order:none"><tbody><tr><td width=3D"50%" height=3D"18">  <table cellpadding=
=3D"0" cellspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000=
;font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;l=
ine-height:22px;table-layout:auto;width:100%;border:none"><tbody><tr><td he=
ight=3D"7"></td></tr><tr><td height=3D"4" style=3D"background:#e9e7e7"><div=
 style=3D"width:100%;height:0;border-width:0;background:#e9e7e7;border-bott=
om:4px solid #e9e7e7"></div></td></tr><tr><td height=3D"7"></td></tr></tbod=
y></table></td><td height=3D"18">  <table cellpadding=3D"0" cellspacing=3D"=
0" width=3D"18" border=3D"0" style=3D"color:#000000;font-family:Ember,&#39;=
Amazon Ember&#39;,Arial,sans-serif;font-size:15px;line-height:22px;table-la=
yout:auto;width:18;border:none"><tbody><tr><td width=3D"18" height=3D"18"><=
div style=3D"border-radius:18px;background:#e9e7e7;line-height:17px;width:1=
8px;height:18px;text-align:center">=C2=A0</div></td></tr></tbody></table></=
td><td width=3D"50%" height=3D"18">  <table cellpadding=3D"0" cellspacing=
=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;font-family:Ember=
,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;line-height:22px;ta=
ble-layout:auto;width:100%;border:none"><tbody><tr><td height=3D"7"></td></=
tr><tr><td height=3D"4" style=3D"background:#e9e7e7"><div style=3D"width:10=
0%;height:0;border-width:0;background:#e9e7e7;border-bottom:4px solid #e9e7=
e7"></div></td></tr><tr><td height=3D"7"></td></tr></tbody></table></td></t=
r></tbody></table></td></tr><tr><td height=3D"5"></td></tr><tr><td> <div st=
yle=3D"font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:=
15px;font-weight:400;line-height:21px;text-align:center;color:#0f1111"><spa=
n>Shipped</span></div> </td></tr></tbody></table></td><td width=3D"25%" val=
ign=3D"top"><table cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" borde=
r=3D"0" style=3D"color:#000000;font-family:Ember,&#39;Amazon Ember&#39;,Ari=
al,sans-serif;font-size:15px;line-height:22px;table-layout:auto;width:100%;=
border:none"><tbody><tr><td style=3D"height:18px"><table cellpadding=3D"0" =
cellspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;font-f=
amily:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;line-hei=
ght:22px;table-layout:auto;width:100%;border:none"><tbody><tr><td width=3D"=
50%" height=3D"18">  <table cellpadding=3D"0" cellspacing=3D"0" width=3D"10=
0%" border=3D"0" style=3D"color:#000000;font-family:Ember,&#39;Amazon Ember=
&#39;,Arial,sans-serif;font-size:15px;line-height:22px;table-layout:auto;wi=
dth:100%;border:none"><tbody><tr><td height=3D"7"></td></tr><tr><td height=
=3D"4" style=3D"background:#e9e7e7"><div style=3D"width:100%;height:0;borde=
r-width:0;background:#e9e7e7;border-bottom:4px solid #e9e7e7"></div></td></=
tr><tr><td height=3D"7"></td></tr></tbody></table></td><td height=3D"18">  =
<table cellpadding=3D"0" cellspacing=3D"0" width=3D"18" border=3D"0" style=
=3D"color:#000000;font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif=
;font-size:15px;line-height:22px;table-layout:auto;width:18;border:none"><t=
body><tr><td width=3D"18" height=3D"18"><div style=3D"border-radius:18px;ba=
ckground:#e9e7e7;line-height:17px;width:18px;height:18px;text-align:center"=
>=C2=A0</div></td></tr></tbody></table></td><td width=3D"50%" height=3D"18"=
>  <table cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" border=3D"0" s=
tyle=3D"color:#000000;font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-s=
erif;font-size:15px;line-height:22px;table-layout:auto;width:100%;border:no=
ne"><tbody><tr><td height=3D"7"></td></tr><tr><td height=3D"4" style=3D"bac=
kground:#e9e7e7"><div style=3D"width:100%;height:0;border-width:0;backgroun=
d:#e9e7e7;border-bottom:4px solid #e9e7e7"></div></td></tr><tr><td height=
=3D"7"></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><t=
d height=3D"5"></td></tr><tr><td> <div style=3D"font-family:Ember,&#39;Amaz=
on Ember&#39;,Arial,sans-serif;font-size:15px;font-weight:400;line-height:2=
1px;text-align:center;color:#0f1111"><span>Out for delivery</span></div> </=
td></tr></tbody></table></td><td width=3D"25%" valign=3D"top"><table cellpa=
dding=3D"0" cellspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#0=
00000;font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:1=
5px;line-height:22px;table-layout:auto;width:100%;border:none"><tbody><tr><=
td style=3D"height:18px"><table cellpadding=3D"0" cellspacing=3D"0" width=
=3D"100%" border=3D"0" style=3D"color:#000000;font-family:Ember,&#39;Amazon=
 Ember&#39;,Arial,sans-serif;font-size:15px;line-height:22px;table-layout:a=
uto;width:100%;border:none"><tbody><tr><td width=3D"50%" height=3D"18">  <t=
able cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" border=3D"0" style=
=3D"color:#000000;font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif=
;font-size:15px;line-height:22px;table-layout:auto;width:100%;border:none">=
<tbody><tr><td height=3D"7"></td></tr><tr><td height=3D"4" style=3D"backgro=
und:#e9e7e7"><div style=3D"width:100%;height:0;border-width:0;background:#e=
9e7e7;border-bottom:4px solid #e9e7e7"></div></td></tr><tr><td height=3D"7"=
></td></tr></tbody></table></td><td height=3D"18">  <table cellpadding=3D"0=
" cellspacing=3D"0" width=3D"18" border=3D"0" style=3D"color:#000000;font-f=
amily:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;line-hei=
ght:22px;table-layout:auto;width:18;border:none"><tbody><tr><td width=3D"18=
" height=3D"18"><div style=3D"border-radius:18px;background:#e9e7e7;line-he=
ight:17px;width:18px;height:18px;text-align:center">=C2=A0</div></td></tr><=
/tbody></table></td><td width=3D"50%" height=3D"18">  <table cellpadding=3D=
"0" cellspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;fo=
nt-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;line=
-height:22px;table-layout:auto;width:100%;border:none"><tbody><tr><td heigh=
t=3D"7"></td></tr><tr><td height=3D"4"></td></tr><tr><td height=3D"7"></td>=
</tr></tbody></table></td></tr></tbody></table></td></tr><tr><td height=3D"=
5"></td></tr><tr><td> <div style=3D"font-family:Ember,&#39;Amazon Ember&#39=
;,Arial,sans-serif;font-size:15px;font-weight:400;line-height:21px;text-ali=
gn:center;color:#0f1111"><span>Delivered</span></div> </td></tr></tbody></t=
able></td></tr></tbody></table></td></tr></tbody></table></div>  </td></tr>=
</tbody></table></div><div style=3D"background:#ffffff;background-color:#ff=
ffff;margin:0px auto;max-width:600px"><table align=3D"center" border=3D"0" =
cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" style=3D"backgrou=
nd:#ffffff;background-color:#ffffff;width:100%"><tbody><tr><td style=3D"dir=
ection:ltr;font-size:0px;padding:4px 8px 4px 8px;text-align:left"><div styl=
e=3D"margin:0px auto;border-radius:4px;max-width:584px"><table align=3D"cen=
ter" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation"=
 style=3D"width:100%;border-radius:4px"><tbody><tr><td style=3D"direction:l=
tr;font-size:0px;padding:0px 8px 0px 8px;text-align:left"><p style=3D"borde=
r-top:solid 1px #bbbfbf;font-size:1px;margin:0px auto;width:100%"></p></td>=
</tr></tbody></table></div></td></tr></tbody></table></div><div style=3D"ba=
ckground:#ffffff;background-color:#ffffff;margin:0px auto;max-width:600px">=
<table align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" ro=
le=3D"presentation" style=3D"background:#ffffff;background-color:#ffffff;wi=
dth:100%"><tbody><tr><td style=3D"direction:ltr;font-size:0px;padding:4px 8=
px 4px 8px;text-align:left"> <div style=3D"background:#ffffff;background-co=
lor:#ffffff;margin:0px auto;border-radius:4px;max-width:584px"><table align=
=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presen=
tation" style=3D"background:#ffffff;background-color:#ffffff;width:100%;bor=
der-radius:4px"><tbody><tr><td style=3D"direction:ltr;font-size:0px;padding=
:12px 8px 16px 8px;text-align:left">      <div style=3D"margin:0px auto;max=
-width:568px"><table align=3D"center" border=3D"0" cellpadding=3D"0" cellsp=
acing=3D"0" role=3D"presentation" style=3D"width:100%"><tbody><tr><td style=
=3D"direction:ltr;font-size:0px;padding:0;text-align:left"><div style=3D"fo=
nt-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-ali=
gn:top;width:100%"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" =
role=3D"presentation" width=3D"100%"><tbody><tr><td style=3D"vertical-align=
:top;padding:0"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" rol=
e=3D"presentation" width=3D"100%"><tbody><tr><td align=3D"left" style=3D"fo=
nt-size:0px;padding:0;word-break:break-word"><div style=3D"margin:0px auto;=
max-width:568px"><table align=3D"center" border=3D"0" cellpadding=3D"0" cel=
lspacing=3D"0" role=3D"presentation" style=3D"width:100%"><tbody><tr><td st=
yle=3D"direction:ltr;font-size:0px;padding:0;text-align:left"><div style=3D=
"font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-=
align:top;width:100%"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"=
0" role=3D"presentation" width=3D"100%"><tbody><tr><td style=3D"vertical-al=
ign:top;padding:0"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" =
role=3D"presentation" width=3D"100%"><tbody><tr><td align=3D"left" style=3D=
"font-size:0px;padding:0;word-break:break-word"><div style=3D"font-family:E=
mber,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:18px;font-weight:700=
;line-height:22px;text-align:left;color:#0f1111"><span>Arriving Thursday</s=
pan></div></td></tr><tr><td align=3D"left" style=3D"font-size:0px;padding:0=
;word-break:break-word"><div style=3D"font-family:Ember,&#39;Amazon Ember&#=
39;,Arial,sans-serif;font-size:15px;font-weight:400;line-height:21px;text-a=
lign:left;color:#0f1111"><span><b>Elliot - OAKLAND, CA</b></span></div></td=
></tr><tr><td align=3D"left" style=3D"font-size:0px;padding:0;word-break:br=
eak-word"><div style=3D"font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans=
-serif;font-size:15px;font-weight:400;line-height:21px;text-align:left;colo=
r:#0f1111"><span><span>Order #</span> <span>=E2=80=AB${orderId}</s=
pan></span></div></td></tr><tr><td align=3D"left" style=3D"font-size:0px;pa=
dding:0;word-break:break-word"><div style=3D"margin:0px auto;max-width:568p=
x"><table align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0"=
 role=3D"presentation" style=3D"width:100%"><tbody><tr><td style=3D"directi=
on:ltr;font-size:0px;padding:0;text-align:left"><div style=3D"font-size:0;l=
ine-height:0;text-align:left;display:inline-block;width:100%;direction:ltr"=
><div style=3D"font-size:0px;text-align:left;direction:ltr;display:inline-b=
lock;vertical-align:top;width:50%"><table border=3D"0" cellpadding=3D"0" ce=
llspacing=3D"0" role=3D"presentation" width=3D"100%"><tbody><tr><td style=
=3D"vertical-align:top;padding:0"><table border=3D"0" cellpadding=3D"0" cel=
lspacing=3D"0" role=3D"presentation" width=3D"100%"><tbody>   <tr><td align=
=3D"left" style=3D"font-size:0px;padding:0;word-break:break-word"><div styl=
e=3D"height:20px;line-height:20px">=E2=80=8A</div></td></tr><tr><td align=
=3D"left" style=3D"font-size:0px;padding:0;word-break:break-word"><table ce=
llpadding=3D"0" cellspacing=3D"0" border=3D"0" role=3D"presentation"><tbody=
><tr><td style=3D"text-align:center;border-radius:24px;background:#ffd916">=
<a aria-describedby=3D"View or edit order" href=3D"https://www.amazon.com/g=
p/r.html?C=3D3E92MSAD2LHAU&amp;K=3D1NG4SOUTCDRLG&amp;M=3Durn:rtn:msg:202503=
241354076f0c20a445c047ccb39cd7b48310p0na&amp;R=3D2G4YA82P66LM3&amp;T=3DC&am=
p;U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fcss%2Forder-details%3ForderID%3D1=
13-9615736-3549843%26ref_%3Dpe_125775000_1044873430_fed_veo&amp;H=3DHAPBMGS=
NHKIXDQEGXXYRZPQSL0MA&amp;ref_=3Dpe_125775000_1044873430_fed_veo" style=3D"=
border:1px solid #fcd200;background:#ffd916;color:#0f1111;text-decoration:n=
one;border-radius:24px;padding:6px 16px;display:inline-block;font-size:13px=
;line-height:18px;white-space:nowrap" target=3D"_blank"><span style=3D"text=
-decoration:none">View or edit order</span></a></td></tr></tbody></table></=
td></tr><tr><td align=3D"left" style=3D"font-size:0px;padding:0;word-break:=
break-word"><div style=3D"height:12px;line-height:12px">=E2=80=8A</div></td=
></tr></tbody></table></td></tr></tbody></table></div><div style=3D"font-si=
ze:0;line-height:0;text-align:left;display:inline-block;width:100%;directio=
n:ltr"></div></div></td></tr></tbody></table></div></td></tr><tr><td align=
=3D"left" style=3D"font-size:0px;padding:0;word-break:break-word"><div styl=
e=3D"margin:0px auto;max-width:568px"><table align=3D"center" border=3D"0" =
cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" style=3D"width:10=
0%"><tbody><tr><td style=3D"direction:ltr;font-size:0px;padding:0;text-alig=
n:left"><div style=3D"font-size:0px;text-align:left;direction:ltr;display:i=
nline-block;vertical-align:top;width:100%"><table border=3D"0" cellpadding=
=3D"0" cellspacing=3D"0" role=3D"presentation" width=3D"100%"><tbody><tr><t=
d style=3D"vertical-align:top;padding:0"><table border=3D"0" cellpadding=3D=
"0" cellspacing=3D"0" role=3D"presentation" width=3D"100%"><tbody><tr><td a=
lign=3D"left" style=3D"font-size:0px;padding:0;word-break:break-word"><div =
style=3D"height:16px;line-height:16px">=E2=80=8A</div></td></tr><tr><td ali=
gn=3D"left" style=3D"font-size:0px;padding:0;word-break:break-word"><div st=
yle=3D"margin:0px auto;max-width:568px"><table align=3D"center" border=3D"0=
" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" style=3D"width:=
100%"><tbody><tr><td style=3D"direction:ltr;font-size:0px;padding:0;text-al=
ign:left"><div style=3D"font-size:0;line-height:0;text-align:left;display:i=
nline-block;width:100%;direction:ltr"><div style=3D"font-size:0px;text-alig=
n:left;direction:ltr;display:inline-block;vertical-align:top;width:25%"><ta=
ble border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" =
width=3D"100%"><tbody><tr><td style=3D"vertical-align:top;padding:0;padding=
-right:8px;padding-left:0"><table border=3D"0" cellpadding=3D"0" cellspacin=
g=3D"0" role=3D"presentation" width=3D"100%"><tbody>       <tr><td align=3D=
"left" style=3D"font-size:0px;padding:0;word-break:break-word"><table style=
=3D"width:100%;border-radius:4px" border=3D"0" cellpadding=3D"0" cellspacin=
g=3D"0" role=3D"presentation" width=3D"100%"><tbody><tr><td style=3D"backgr=
ound-image:linear-gradient(rgba(15,17,17,0.03),rgba(15,17,17,0.03));border-=
radius:4px;width:100%;height:64px;vertical-align:middle;text-align:center;p=
adding:8px"><a href=3D"https://www.amazon.com/gp/f.html?C=3D3E92MSAD2LHAU&a=
mp;K=3D1NG4SOUTCDRLG&amp;M=3Durn:rtn:msg:202503241354076f0c20a445c047ccb39c=
d7b48310p0na&amp;R=3D1QO9SFAPUTA16&amp;T=3DC&amp;U=3D%2Fdp%2FB079ZV4V3C%3Fr=
ef_%3Dpe_125775000_1044873430_fed_asin_title&amp;H=3DWIMANNP8LF8RJQO50T5NBN=
E0LD0A&amp;ref_=3Dpe_125775000_1044873430_fed_asin_title" style=3D"backgrou=
nd-color:transparent;display:inline-block" target=3D"_blank"><img style=3D"=
width:100%;height:auto;max-height:64px;max-width:64px;margin:auto;display:b=
lock" width=3D"122" src=3D"https://m.media-amazon.com/images/I/71ORqgJajrL.=
SS90_.jpg" alt=3D"${productName}=
25 Sheet Capacity, Non-Slip, Black"></a></td></tr></tbody></table></td></tr=
></tbody></table></td></tr></tbody></table></div><div style=3D"font-size:0p=
x;text-align:left;direction:ltr;display:inline-block;vertical-align:top;wid=
th:75%"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"pre=
sentation" width=3D"100%"><tbody><tr><td style=3D"vertical-align:top;paddin=
g:0"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presen=
tation" width=3D"100%"><tbody><tr><td align=3D"left" style=3D"font-size:0px=
;padding:0;word-break:break-word"><div style=3D"font-family:Ember,&#39;Amaz=
on Ember&#39;,Arial,sans-serif;font-size:15px;font-weight:400;line-height:2=
1px;text-align:left;color:#0f1111"><span><a href=3D"https://www.amazon.com/=
gp/f.html?C=3D3E92MSAD2LHAU&amp;K=3D1NG4SOUTCDRLG&amp;M=3Durn:rtn:msg:20250=
3241354076f0c20a445c047ccb39cd7b48310p0na&amp;R=3D3JGZOL9XEVAGF&amp;T=3DC&a=
mp;U=3D%2Fdp%2FB079ZV4V3C%3Fref_%3Dpe_125775000_1044873430_fed_asin_title&a=
mp;H=3DWBNYTGXAKGXXRZGFINEQDRAJPQCA&amp;ref_=3Dpe_125775000_1044873430_fed_=
asin_title" style=3D"color:#0f1111" target=3D"_blank">=
 with 1000 S...</a></span></div></td></tr>   <tr><td align=3D"left" style=
=3D"font-size:0px;padding:0;word-break:break-word"><div style=3D"height:4px=
;line-height:4px">=E2=80=8A</div></td></tr><tr><td align=3D"left" style=3D"=
font-size:0px;padding:0;word-break:break-word"><div style=3D"font-family:Em=
ber,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:13px;font-weight:400;=
line-height:18px;text-align:left;color:#565959"><span>Quantity: 1</span></d=
iv></td></tr> <tr><td align=3D"left" style=3D"font-size:0px;padding:0;word-=
break:break-word"><div style=3D"height:4px;line-height:4px">=E2=80=8A</div>=
</td></tr><tr><td align=3D"left" style=3D"font-size:0px;padding:0;word-brea=
k:break-word"><div style=3D"font-family:Ember,&#39;Amazon Ember&#39;,Arial,=
sans-serif;font-size:18px;font-weight:400;line-height:22px;text-align:left;=
color:#0f1111"><span>  <span role=3D"region" aria-label=3D"{amount=3D6.13, =
currencyCode=3D{smallestAmount=3D0.01, code=3DUSD}}" style=3D"font-size:18p=
x;font-weight:400;vertical-align:baseline"><sup style=3D"font-size:10px">$<=
/sup>6<sup style=3D"font-size:10px">13</sup> </span></span></div></td></tr>=
</tbody></table></td></tr></tbody></table></div></div></td></tr></tbody></t=
able></div></td></tr></tbody></table></td></tr></tbody></table></div></td><=
/tr></tbody></table></div></td></tr></tbody></table></td></tr></tbody></tab=
le></div></td></tr></tbody></table></div></td></tr><tr><td align=3D"left" s=
tyle=3D"font-size:0px;padding:0;word-break:break-word"><div style=3D"height=
:12px;line-height:12px">=E2=80=8A</div></td></tr><tr><td align=3D"left" sty=
le=3D"font-size:0px;padding:0;word-break:break-word"><table width=3D"100%" =
role=3D"presentation"><tbody><tr><td style=3D"width:100%;height:1px;padding=
-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px"><p style=3D=
"border-top:solid 1px #bbbfbf;font-size:1px;margin:0px auto;width:100%"></p=
></td></tr></tbody></table></td></tr><tr><td align=3D"left" style=3D"font-s=
ize:0px;padding:0;word-break:break-word"><div style=3D"margin:0px auto;max-=
width:568px"><table align=3D"center" border=3D"0" cellpadding=3D"0" cellspa=
cing=3D"0" role=3D"presentation" style=3D"width:100%"><tbody><tr><td style=
=3D"direction:ltr;font-size:0px;padding:0;text-align:left"><div style=3D"fo=
nt-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-ali=
gn:top;width:100%"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" =
role=3D"presentation" width=3D"100%"><tbody><tr><td style=3D"vertical-align=
:top;padding:0"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" rol=
e=3D"presentation" width=3D"100%"><tbody><tr><td align=3D"left" style=3D"fo=
nt-size:0px;padding:0;word-break:break-word"><div style=3D"height:12px;line=
-height:12px">=E2=80=8A</div></td></tr><tr><td align=3D"left" style=3D"font=
-size:0px;padding:0;word-break:break-word"><div style=3D"margin:0px auto;ma=
x-width:568px"><table align=3D"center" border=3D"0" cellpadding=3D"0" cells=
pacing=3D"0" role=3D"presentation" style=3D"width:100%"><tbody><tr><td styl=
e=3D"direction:ltr;font-size:0px;padding:0;text-align:left"><div style=3D"f=
ont-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-al=
ign:top;width:100%"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0"=
 role=3D"presentation" width=3D"100%"><tbody><tr><td style=3D"vertical-alig=
n:top;padding:0"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" ro=
le=3D"presentation" width=3D"100%"><tbody><tr><td align=3D"left" style=3D"f=
ont-size:0px;padding:0;word-break:break-word"><table cellpadding=3D"0" cell=
spacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#000000;font-famil=
y:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;line-height:=
22px;table-layout:auto;width:100%;border:none"><tbody><tr><td><u></u><u></u=
></td><td align=3D"left" style=3D"width:50%;padding-right:30px;font-size:14=
px">Total</td><td align=3D"right" style=3D"width:50%;font-size:14px;font-we=
ight:bold"><u></u><u></u><u></u> <u></u>  $${price}<u></u><u></u></td></tr></tb=
ody></table></td></tr></tbody></table></td></tr></tbody></table></div></td>=
</tr></tbody></table></div></td></tr></tbody></table></td></tr></tbody></ta=
ble></div></td></tr></tbody></table></div></td></tr><tr><td align=3D"left" =
style=3D"font-size:0px;padding:0;word-break:break-word"><div style=3D"heigh=
t:12px;line-height:12px">=E2=80=8A</div></td></tr><tr><td align=3D"left" st=
yle=3D"font-size:0px;padding:0;word-break:break-word"><table width=3D"100%"=
 role=3D"presentation"><tbody><tr><td style=3D"width:100%;height:1px;paddin=
g-top:0px;padding-bottom:0px;padding-left:0px;padding-right:0px"><p style=
=3D"border-top:solid 1px #bbbfbf;font-size:1px;margin:0px auto;width:100%">=
</p></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody><=
/table></div></td></tr></tbody></table></div> </td></tr></tbody></table></d=
iv> </td></tr></tbody></table></div><div style=3D"background:#ffffff;backgr=
ound-color:#ffffff;margin:0px auto;max-width:600px"><table align=3D"center"=
 border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" sty=
le=3D"background:#ffffff;background-color:#ffffff;width:100%"><tbody><tr><t=
d style=3D"direction:ltr;font-size:0px;padding:4px 8px 4px 8px;text-align:l=
eft"><div style=3D"background:#ffffff;background-color:#ffffff;margin:0px a=
uto;border-radius:4px;max-width:584px"><table align=3D"center" border=3D"0"=
 cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" style=3D"backgro=
und:#ffffff;background-color:#ffffff;width:100%;border-radius:4px"><tbody><=
tr><td style=3D"direction:ltr;font-size:0px;padding:4px 8px 4px 8px;text-al=
ign:left">  <table cellpadding=3D"0" cellspacing=3D"0" width=3D"100%" borde=
r=3D"0" style=3D"color:#000000;font-family:Ember,&#39;Amazon Ember&#39;,Ari=
al,sans-serif;font-size:15px;line-height:22px;table-layout:auto;width:100%;=
border:none"><tbody><tr><td width=3D"65%"><div style=3D"font-family:Ember,&=
#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;line-height:1;text-al=
ign:left;color:#000000"><h2 style=3D"margin:0;padding:0;font-family:Ember,&=
#39;Amazon Ember&#39;,Arial,sans-serif;font-weight:700;font-size:18px;line-=
height:22px;color:#0f1111">Keep shopping for</h2></div></td></tr></tbody></=
table><div style=3D"height:8px;line-height:8px">=E2=80=8A</div><table cellp=
adding=3D"0" cellspacing=3D"0" width=3D"100%" border=3D"0" style=3D"color:#=
000000;font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:=
15px;line-height:22px;table-layout:auto;width:100%;border:none"><tbody><tr>=
<td valign=3D"top" width=3D"32%">  <table role=3D"presentation" style=3D"ta=
ble-layout:fixed;width:100%;max-width:100%;background-color:#f7f7f7;border-=
radius:8px"><tbody><tr><td style=3D"padding:0px"><table role=3D"presentatio=
n" width=3D"100%"><tbody><tr><td align=3D"center"><a href=3D"https://www.am=
azon.com/gp/r.html?C=3D3E92MSAD2LHAU&amp;K=3D1NG4SOUTCDRLG&amp;M=3Durn:rtn:=
msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&amp;R=3DXHXAKSNDZ1HK&amp=
;T=3DC&amp;U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB0DH37QQZN%2F%=
3Fref_%3Dpe_125775000_1044873430_AGH3Col0400IMG_2p_0_lm&amp;H=3DJTXBBZMB4RT=
T8VJGGN4GRQZ1DNCA&amp;ref_=3Dpe_125775000_1044873430_AGH3Col0400IMG_2p_0_lm=
" target=3D"_blank"><img src=3D"https://m.media-amazon.com/images/I/410f7cS=
GbdL._SR276,276_.jpg" alt=3D"Universal Convertible Car Seat Cover - Backsea=
t Shade &amp; Sun Shade Visor Extender for Baby &amp; Toddler - Rear &amp; =
Forward Facing" align=3D"center" width=3D"138" height=3D"138" style=3D"widt=
h:100%;height:auto;max-width:138px;max-height:138px"></a></td></tr></tbody>=
</table><div style=3D"padding:4px"> <table role=3D"presentation" border=3D"=
0" cellpadding=3D"0" cellspacing=3D"0" style=3D"padding-bottom:4px"><tbody>=
<tr><td><span style=3D"font-size:13px;font-weight:400;line-height:16px;colo=
r:#0f1111;direction:ltr!important">$28.99 </span></td></tr></tbody></table>=
<div style=3D"font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;fon=
t-size:15px;font-weight:400;line-height:20px;text-align:left;color:#0f1111"=
><span><div style=3D"width:174px;overflow:hidden;text-overflow:ellipsis;whi=
te-space:nowrap;max-width:100%">Universal Convertible Car Seat...</div></sp=
an></div></div></td></tr></tbody></table></td><td width=3D"2%"><div>=C2=A0<=
/div></td>  <td valign=3D"top" width=3D"32%">  <table role=3D"presentation"=
 style=3D"table-layout:fixed;width:100%;max-width:100%;background-color:#f7=
f7f7;border-radius:8px"><tbody><tr><td style=3D"padding:0px"><table role=3D=
"presentation" width=3D"100%"><tbody><tr><td align=3D"center"><a href=3D"ht=
tps://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&amp;K=3D1NG4SOUTCDRLG&amp;=
M=3Durn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&amp;R=3D1PAI=
VOLKQQNBS&amp;T=3DC&amp;U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB=
00ZOKJVAG%2F%3Fref_%3Dpe_125775000_1044873430_AGH3Col0401IMG_2p_1_lm&amp;H=
=3D8R2AEWTJAJOQJLIKPVB52WZKL8YA&amp;ref_=3Dpe_125775000_1044873430_AGH3Col0=
401IMG_2p_1_lm" target=3D"_blank"><img src=3D"https://m.media-amazon.com/im=
ages/I/51AlBYasFZL._SR276,276_.jpg" alt=3D"kinder Fluff Car Window Shade (4=
Pack)-The Only Certified Car Window Sun Shade for Baby Proven to Block 99.9=
5% UVR - Mom&#39;s Choice Gold Award - Car Seat Sun Protection - Standard" =
align=3D"center" width=3D"138" height=3D"138" style=3D"width:100%;height:au=
to;max-width:138px;max-height:138px"></a></td></tr></tbody></table><div sty=
le=3D"padding:4px"> <table role=3D"presentation" border=3D"0" cellpadding=
=3D"0" cellspacing=3D"0" style=3D"padding-bottom:4px"><tbody><tr><td><span =
style=3D"font-size:13px;font-weight:400;line-height:16px;color:#0f1111;dire=
ction:ltr!important">$14.95 </span></td></tr></tbody></table><div style=3D"=
font-family:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;fo=
nt-weight:400;line-height:20px;text-align:left;color:#0f1111"><span><div st=
yle=3D"width:174px;overflow:hidden;text-overflow:ellipsis;white-space:nowra=
p;max-width:100%">kinder Fluff Car Window Shade...</div></span></div></div>=
</td></tr></tbody></table></td><td width=3D"2%"><div>=C2=A0</div></td>  <td=
 valign=3D"top" width=3D"32%">  <table role=3D"presentation" style=3D"table=
-layout:fixed;width:100%;max-width:100%;background-color:#f7f7f7;border-rad=
ius:8px"><tbody><tr><td style=3D"padding:0px"><table role=3D"presentation" =
width=3D"100%"><tbody><tr><td align=3D"center"><a href=3D"https://www.amazo=
n.com/gp/r.html?C=3D3E92MSAD2LHAU&amp;K=3D1NG4SOUTCDRLG&amp;M=3Durn:rtn:msg=
:202503241354076f0c20a445c047ccb39cd7b48310p0na&amp;R=3D2FHYUYF2VUYZ9&amp;T=
=3DC&amp;U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fproduct%2FB093296RCV%2F%3F=
ref_%3Dpe_125775000_1044873430_AGH3Col0402IMG_2p_2_lm&amp;H=3DQQWLLM60X6LLH=
SRDFGSXGSRAFI0A&amp;ref_=3Dpe_125775000_1044873430_AGH3Col0402IMG_2p_2_lm" =
target=3D"_blank"><img src=3D"https://m.media-amazon.com/images/I/41yK6TSkW=
ZL._SR276,276_.jpg" alt=3D"Nightcap The Original Drink Cover Scrunchie, 2 P=
ack =E2=80=93 As Seen On Shark Tank And TikTok - Reusable - Wear On Wrist O=
r In Hair, Prevent Drink Spiking - Sanitary Pocket Keeps Cover Clean =E2=80=
=93 Black" align=3D"center" width=3D"138" height=3D"138" style=3D"width:100=
%;height:auto;max-width:138px;max-height:138px"></a></td></tr></tbody></tab=
le><div style=3D"padding:4px"> <table role=3D"presentation" border=3D"0" ce=
llpadding=3D"0" cellspacing=3D"0" style=3D"padding-bottom:4px"><tbody><tr><=
td><span style=3D"font-weight:400;font-size:13px;line-height:16px;color:#cc=
0c39;display:inline-block;margin-right:4px">-24% </span><span style=3D"font=
-size:13px;font-weight:400;line-height:16px;color:#0f1111;direction:ltr!imp=
ortant">$18.99 </span></td></tr></tbody></table><div style=3D"font-family:E=
mber,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:15px;font-weight:400=
;line-height:20px;text-align:left;color:#0f1111"><span><div style=3D"width:=
174px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:1=
00%">Nightcap The Original Drink...</div></span></div></div></td></tr></tbo=
dy></table></td>  </tr></tbody></table></td></tr></tbody></table></div>    =
    </td></tr></tbody></table></div><div style=3D"background:#ffffff;backgr=
ound-color:#ffffff;margin:0px auto;max-width:600px"><table align=3D"center"=
 border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presentation" sty=
le=3D"background:#ffffff;background-color:#ffffff;width:100%"><tbody><tr><t=
d style=3D"direction:ltr;font-size:0px;padding:4px 0px 0px 0px;text-align:l=
eft"> <div style=3D"background:#f0f2f2;background-color:#f0f2f2;margin:0px =
auto;max-width:600px"><table align=3D"center" border=3D"0" cellpadding=3D"0=
" cellspacing=3D"0" role=3D"presentation" style=3D"background:#f0f2f2;backg=
round-color:#f0f2f2;width:100%"><tbody><tr><td style=3D"direction:ltr;font-=
size:0px;padding:0;text-align:left"><div style=3D"margin:0px auto;max-width=
:600px"><table align=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=
=3D"0" role=3D"presentation" style=3D"width:100%"><tbody><tr><td style=3D"d=
irection:ltr;font-size:0px;padding:20px 16px 0;text-align:left"><div style=
=3D"font-size:0px;text-align:left;direction:ltr;display:inline-block;vertic=
al-align:top;width:100%"><table border=3D"0" cellpadding=3D"0" cellspacing=
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
irection:ltr;font-size:0px;padding:20px 16px 0;text-align:left"><div style=
=3D"font-size:0px;text-align:left;direction:ltr;display:inline-block;vertic=
al-align:top;width:100%"><table border=3D"0" cellpadding=3D"0" cellspacing=
=3D"0" role=3D"presentation" width=3D"100%"><tbody><tr><td style=3D"vertica=
l-align:top;padding:0"><table border=3D"0" cellpadding=3D"0" cellspacing=3D=
"0" role=3D"presentation" width=3D"100%"><tbody><tr><td align=3D"left" styl=
e=3D"font-size:0px;padding:0;word-break:break-word"><div style=3D"font-fami=
ly:Ember,&#39;Amazon Ember&#39;,Arial,sans-serif;font-size:14px;font-weight=
:400;line-height:20px;text-align:left;color:#494d4d"><p>By placing your ord=
er, you agree to Amazon.com=E2=80=99s <a href=3D"https://www.amazon.com/gp/=
r.html?C=3D3E92MSAD2LHAU&amp;K=3D1NG4SOUTCDRLG&amp;M=3Durn:rtn:msg:20250324=
1354076f0c20a445c047ccb39cd7b48310p0na&amp;R=3D3K3ETTJRKYY7M&amp;T=3DC&amp;=
U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fhelp%2Fcustomer%2Fdisplay.html%3Fie=
%3DUTF8%26nodeId%3D468496%26ref_%3Dpe_125775000_1044873430_fed_roclt_defaul=
t_policy&amp;H=3D3WZANOYMAAKZNIJGVDZ6A4QQ9IAA&amp;ref_=3Dpe_125775000_10448=
73430_fed_roclt_default_policy" rel=3D"nofollow" target=3D"_blank">Privacy =
Notice</a> and <a href=3D"https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHA=
U&amp;K=3D1NG4SOUTCDRLG&amp;M=3Durn:rtn:msg:202503241354076f0c20a445c047ccb=
39cd7b48310p0na&amp;R=3D31MYR46CF9COX&amp;T=3DC&amp;U=3Dhttps%3A%2F%2Fwww.a=
mazon.com%2Fgp%2Fhelp%2Fcustomer%2Fdisplay.html%3Fie%3DUTF8%26nodeId%3D5080=
88%26ref_%3Dpe_125775000_1044873430_fed_roclt_default_policy&amp;H=3D53APDU=
CXI1P6ARYWU2YQIJD6WFEA&amp;ref_=3Dpe_125775000_1044873430_fed_roclt_default=
_policy" rel=3D"nofollow" target=3D"_blank"> Conditions of Use</a>. Unless =
otherwise noted, items sold by Amazon.com are subject to sales tax in selec=
t states in accordance with the applicable laws of that state. If your orde=
r contains one or more items from a seller other than Amazon.com, it may be=
 subject to state and local sales tax, depending upon the seller&#39;s busi=
ness policies and the location of their operations. Learn more about <a hre=
f=3D"https://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&amp;K=3D1NG4SOUTCDR=
LG&amp;M=3Durn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&amp;R=
=3DMY7CD5DVOOPC&amp;T=3DC&amp;U=3Dhttps%3A%2F%2Fwww.amazon.com%2Fgp%2Fhelp%=
2Fcustomer%2Fdisplay.html%3Fie%3DUTF8%26nodeId%3D202029700%26ref_%3Dpe_1257=
75000_1044873430_fed_roclt_default_policy&amp;H=3DYTUXPGZAARVQUTGZKFB3GSJV3=
ICA&amp;ref_=3Dpe_125775000_1044873430_fed_roclt_default_policy" rel=3D"nof=
ollow" target=3D"_blank">tax and seller information</a>.</p>
<p>Items in this order may be subject to California&#39;s Electronic Waste =
Recycling Act. If any items in this order are subject to that Act, the sell=
er of that item has elected to pay any fees due on your behalf.</p></div></=
td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody><=
/table></div> <div style=3D"margin:0px auto;max-width:600px"><table align=
=3D"center" border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"presen=
tation" style=3D"width:100%"><tbody><tr><td style=3D"direction:ltr;font-siz=
e:0px;padding:14px 16px 4px 0;text-align:left"><div style=3D"font-size:0px;=
text-align:left;direction:ltr;display:inline-block;vertical-align:top;width=
:100%"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"pres=
entation" width=3D"100%"><tbody><tr><td style=3D"vertical-align:top;padding=
:0"><table border=3D"0" cellpadding=3D"0" cellspacing=3D"0" role=3D"present=
ation" width=3D"100%"><tbody><tr><td><table style=3D"height:43px;width:86px=
"><tbody><tr><td><img src=3D"https://m.media-amazon.com/images/G/01/outboun=
d/OutboundTemplates/Smile_Logo_Light._BG240,242,242_.png" alt=3D"Amazon.com=
" height=3D"43" width=3D"86" align=3D"left"></td></tr></tbody></table><tabl=
e style=3D"height:43px;width:86px;display:none"><tbody><tr><td><img src=3D"=
https://m.media-amazon.com/images/G/01/outbound/OutboundTemplates/Smile_Log=
o_Dark.png" alt=3D"Amazon.com" height=3D"43" width=3D"86" align=3D"left"></=
td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table=
></div></td></tr></tbody></table></div></td></tr></tbody></table></div> </t=
d></tr></tbody></table></div></div><img width=3D"1" height=3D"1" src=3D"htt=
ps://www.amazon.com/gp/r.html?C=3D3E92MSAD2LHAU&amp;K=3D1NG4SOUTCDRLG&amp;M=
=3Durn:rtn:msg:202503241354076f0c20a445c047ccb39cd7b48310p0na&amp;R=3D3N4HP=
2JVSY4XF&amp;T=3DE&amp;U=3Dhttps%3A%2F%2Fimages-na.ssl-images-amazon.com%2F=
images%2FG%2F01%2Fnav%2Ftransp.gif&amp;H=3DMTZCAGARTUZQOKFXA2GNNC4QVMIA&amp=
;ref_=3Dpe_125775000_1044873430_open"></div></div></div></div>
</div></div>

--000000000000b7ee4606311ec4ed--`;
}
