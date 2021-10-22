---
id: python-windows-installation
# slug: /courses/python/tutorials/beginner/get-started/python-windows-installation
title: نصب پایتون در ویندوز
description: نصب پایتون در ویندوز
hide_title: false
hide_table_of_contents: false
image: "/img/logos/python-logo.svg"
pagination_label: نصب پایتون در ویندوز
sidebar_label: نصب پایتون در ویندوز
keywords:
  - نصب پایتون در ویندوز
  - آموزش نصب پایتون در ویندوز
  - نصب پایتون در ویندوز به زبان فارسی
  - آموزش قدم به قدم نصب پایتون در ویندوز
  - آموزش قدم به قدم نصب پایتون
  - نصب پایتون برای ویندوز 7
  - نصب پایتون روی ویندوز سون
  - نصب پایتون روی ویندوز xp
  - نصب پایتون ویندوز هفت
  - نصب پایتون بر روی ویندوز 7
  - نصب پایتون روی ویندوز 10
  - نصب پایتون ویندوز 10
---

import Image from '@theme/IdealImage';

import python_windows_installation_1 from '/img/docs/courses/python/beginner/get-started/python-windows-installation/python-windows-installation-1.png';
import python_windows_installation_2 from '/img/docs/courses/python/beginner/get-started/python-windows-installation/python-windows-installation-2.png';
import python_windows_installation_3 from '/img/docs/courses/python/beginner/get-started/python-windows-installation/python-windows-installation-3.png';
import python_windows_installation_4 from '/img/docs/courses/python/beginner/get-started/python-windows-installation/python-windows-installation-4.png';
import python_windows_installation_5 from '/img/docs/courses/python/beginner/get-started/python-windows-installation/python-windows-installation-5.png';
import python_windows_installation_6 from '/img/docs/courses/python/beginner/get-started/python-windows-installation/python-windows-installation-6.png';
import python_windows_installation_7 from '/img/docs/courses/python/beginner/get-started/python-windows-installation/python-windows-installation-7.png';

بهترین راه و سریع‌ترین راه برای نصب پایتون توی ویندوز اینه که فایل مناسب رو از سایت پایتون دانلود و نصب کنیم.

## **دانلود پایتون**

برای نصب آخرین نسخه پایتون به سایت [www.python.org](https://www.python.org/) برید تا عکس زیر رو ببینید:

<div className="padding-vert--md">
  <Image img={python_windows_installation_1}/>
</div>

برای اینکه به قسمت دانلود برید، روی دایره قرمز رنگی که مشخص کردم کلیک کنید. وارد یک صفحه جدید میشید. پایین صفحه برید تا جدول زیر رو ببینید:

<div className="padding-vert--md">
  <Image img={python_windows_installation_2}/>
</div>

همونطور که میبینید دوتا دایره قرمز براتون مشخص کردم که فایل‌های نصبی پایتون برای ویندوز هستن. با توجه به اینکه سیستم شما ۳۲بیتی یا ۶۴بیتی هستش، فایل مناسب رو دانلود کنید.

توجه کنید که:

- **Windows installer (32-bit)** برای سیستم‌های **۳۲بیتی** هستش.
- **Windows installer (64-bit)** برای سیستم‌های **۶۴بیتی** هستش.

## **نصب پایتون**

:::tip نکته

باید خدمتتون عرض کنم که نصب ورژن‌های مختلف پایتون تفاوت چندانی نداره و ممکنه ورژنی که شما دانلود میکنید با چیزی که توی این آموزش ازش استفاده شده متفاوت باشه. پس نگران نباشید.

:::

حالا روی فایلی که دانلود کردید کلید کنید تا باز بشه و تصویر زیر رو ببینید:

<div className="padding-vert--md">
  <Image img={python_windows_installation_3}/>
</div>

دقت کنید که حتما دوتا تیک پایین صفحه رو بزنید. حالا روی دکمه **Install Now** کلیک کنید و اجازه بدید که پایتون نصب بشه و صفحه زیر ظاهر بشه:

<div className="padding-vert--md">
  <Image img={python_windows_installation_4}/>
</div>

حالا روی **Disable path length limit** کلیک کنید و بعد دکمه **Close** رو بزنید. این تمام کاری بود که باید انجام میدادید.

تبریک میگم. حالا شما آخرین نسخه پایتون رو نصب کردید.

## **اولین برنامه پایتون**

حالا باید محیط برنامه نویسی پایتون رو باز کنید. برای این کار، منو استارت رو باز کنید و **Python** رو سرچ کنید. باید عکسی شبیه عکس زیر ببینید:

<div className="padding-vert--md">
  <Image img={python_windows_installation_5}/>
</div>

- اگر روی **Python 3.9 (64-bit)** کلیک کنید، [**Python Shell**](#python-shell) نمایش داده میشه.
- اگر روی **IDLE (Python 3.9 64-bit)** کلیک کنید، [**Python IDLE**](#python-idle) نمایش داده میشه.

بریم تا بررسی کنیم تفاوت این دوتا محیط چیه و اولین برنامه پایتون رو بنویسیم.

### Python Shell

<div className="padding-vert--md">
  <Image img={python_windows_installation_6}/>
</div>

اسم این محیط سیاه رنگ، **Shell** هست. خوبیه این محیط اینه که دستورات ساده پایتون رو میتونید توش اجرا کنید. برای مثال کد زیر رو میتونید توی این محیط بنویسید و کلید **Enter** رو بزنید تا نتیجه کار رو ببینید:

```python title="Python"
print("Hello World!")
```

البته باید این رو در نظر بگیرید که اگر این پنجره ببندید، تمام کدهایی که نوشتید پاک میشه.

### Python IDLE

<div className="padding-vert--md">
  <Image img={python_windows_installation_7}/>
</div>

محیط **IDLE** با نصب پایتون قابل استفاده هستش.

این محیط نسبت به **Python Shell** قابلیت‌های بیشتری داره. مثلا کدها رو به صورت رنگی نمایش میده و اگر کدی رو به اشتباه تایپ کنید، به راحتی متوجه اون میشید.

برای مثال کد زیر رو میتونید توی این محیط بنویسید و کلید **Enter** رو بزنید تا نتیجه کار رو ببینید:

```python title="Python"
print("Hello World!")
```
