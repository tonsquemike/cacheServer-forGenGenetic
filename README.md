**Cache server GenGenetic framework**

----



---------------------------------



Storage aptitude function thats not previously stored

* **URL**



  </FA>



* **Method:**

  

  </FA>



  `POST`

  

*  **URL Params**



   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._> 



   **Required for POST:**

   `IND=String&FA=float`





* **Data Params example**



  <IND=IND3452.bin&FA=-4001.0>



* **Success Response:**

  

  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>



  * **Code:** 200 <br />

    **Content:** `{  }`

 

* **Error Response:**



  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>



  * **Code:** 401 UNAUTHORIZED <br />

    **Content:** `{ error : "Log in" }`



  OR



  * **Code:** 422 UNPROCESSABLE ENTRY <br />

    **Content:** `{ error : "Email Invalid" }`



* **Sample Call:**



  curl -d "EXP_testeaMutacion-1.01.00.01.00.00.01.01.01.01.00.01.00.01.01.0&FA=-40001.0" -X POST http://localhost:3000/FA



* **Notes:**



  The value of IniDif must be float type







  ---------------------------------



get aptitude function stored on cache

* **URL**



  </FA>



* **Method:**

  

  </FA>



  `GET`

  

*  **URL Params**



   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._> 



   **Required for POST:**

   EXP_NAME = name of the actual experiment

   indFloatToString = function that decode your individual in the path (FNEXTGPOP+File.separator+Ind)

   `EXP_NAME+"-"+indFloatToString(FNEXTGPOP+File.separator+Ind)`





* **Data Params example**



  <EXP_testeaMutacion-1.01.00.01.00.00.01.01.01.01.00.01.00.01.01.0>



* **Success Response:**

  

  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>



  * **Code:** 200 <br />

    **Content:** `{ EXP_testeaMutacion-1.01.00.01.00.00.01.01.01.01.00.01.00.01.01.0:::-40001.0 }`

    Where the value after ':::' is the aptitude of the searched individual

    The retrieved json string contains the a prefix after ':::' to locate the value in case of a parallel calls to GET addres

 

* **Error Response:**



  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>



  * **Code:** 401 UNAUTHORIZED <br />

    **Content:** `{ error : "Log in" }`



  OR



  * **Code:** 422 UNPROCESSABLE ENTRY <br />

    **Content:** `{ error : "Email Invalid" }`



* **Sample Call:**



  curl -d "IND=IND3452.bin&FA=-4001.0" -X POST http://localhost:3000/FA



* **Notes:**



  The value of IniDif must be float type



  -----------------------------------------



  POST the actual diference between BEST(OPTIMOD) individual and AVERAGE(PROM) of the popultation



* **URL**



  </IniDif>



* **Method:**

  

  <IniDif>



  `GET` | `POST`

  

*  **URL Params**



   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._> 



   **Required for POST:**

 

   `IniDif=[float]`





* **Data Params example**



  <IniDif=4567.0>



* **Success Response:**

  

  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>



  * **Code:** 200 <br />

    **Content:** `{ id : 12 }`

 

* **Error Response:**



  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>



  * **Code:** 401 UNAUTHORIZED <br />

    **Content:** `{ error : "Log in" }`



  OR



  * **Code:** 422 UNPROCESSABLE ENTRY <br />

    **Content:** `{ error : "Email Invalid" }`



* **Sample Call:**



  curl -d "IniDif=4567.0" -X POST http://localhost:3000/IniDif 



* **Notes:**



  The value of IniDif must be float type



---------------------------------



Save the actual BEST aptitude function of individual according to OPTIMOD label

* **URL**



  <//BEST>



* **Method:**

  

  </BEST>



  `GET` | `POST`

  

*  **URL Params**



   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._> 



   **Required for POST:**

 

   `BEST=[float]`





* **Data Params example**



  <BEST=-4000.0>



* **Success Response:**

  

  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>



  * **Code:** 200 <br />

    **Content:** `{ id : 12 }`

 

* **Error Response:**



  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>



  * **Code:** 401 UNAUTHORIZED <br />

    **Content:** `{ error : "Log in" }`



  OR



  * **Code:** 422 UNPROCESSABLE ENTRY <br />

    **Content:** `{ error : "Email Invalid" }`



* **Sample Call:**



  curl -d "IniDif=4567.0" -X POST http://localhost:3000/IniDif 



* **Notes:**



  The value of IniDif must be float type





---------------------------------



Save the actual BEST aptitude function of individual according to OPTIMOD label

* **URL**



  </BEST>



* **Method:**

  

  </BEST>



  `GET` | `POST`

  

*  **URL Params**



   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._> 



   **Required for POST:**

 

   `BEST=[float]`





* **Data Params example**



  <BEST=-4000.0>



* **Success Response:**

  

  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>



  * **Code:** 200 <br />

    **Content:** `{ id : 12 }`

 

* **Error Response:**



  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>



  * **Code:** 401 UNAUTHORIZED <br />

    **Content:** `{ error : "Log in" }`



  OR



  * **Code:** 422 UNPROCESSABLE ENTRY <br />

    **Content:** `{ error : "Email Invalid" }`



* **Sample Call:**



  curl -d "IniDif=4567.0" -X POST http://localhost:3000/IniDif 



* **Notes:**



  The value of IniDif must be float type







  ---------------------------------



ENABLE or DISABLE cache server

if you make a POST request with CACHE=ENABLE the cache server is active

* **URL**



  </CACHE>



* **Method:**

  

  </CACHE>



  `GET` | `POST`

  

*  **URL Params**



   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._> 



   **Required for POST:**

 

   `CACHE=true|false`





* **Data Params example**



  <CACHE=false>



* **Success Response:**

  

  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>



  * **Code:** 200 <br />

    **Content:** `{ id : 12 }`

 

* **Error Response:**



  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>



  * **Code:** 401 UNAUTHORIZED <br />

    **Content:** `{ error : "Log in" }`



  OR



  * **Code:** 422 UNPROCESSABLE ENTRY <br />

    **Content:** `{ error : "Email Invalid" }`



* **Sample Call:**



  curl -d "CACHE=true" -X POST http://localhost:3000/CACHE



* **Notes:**



  any value different than false|true put the server on DISABLED MODE





  ---------------------------------



Download the cache MAP of the actual experiment

This address return a txt file with all the cache

* **URL**



  < /GET_MAP>



* **Method:**

  

  </GET_MAP>



  `GET`

  

*  **URL Params**



    No params needed

   <_If URL params exist, specify them in accordance with name mentioned in URL section. Separate into optional and required. Document data constraints._> 



* **Success Response:**

  

  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>



  * **Code:** 200 <br />

    **Content:** `file=MAP.txt`

 

* **Error Response:**



  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc. All of those should be liste d here. It might seem repetitive, but it helps prevent assumptions from being made where they should be._>



  * **Code:** 401 UNAUTHORIZED <br />

    **Content:** `{ error : "Log in" }`



  OR



  * **Code:** 422 UNPROCESSABLE ENTRY <br />

    **Content:** `{ error : "Email Invalid" }`



* **Sample Call:**

    Open your web browser and go to: http://localhost:3000/GET_MAP to download the txt file





 
