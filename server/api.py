from fastapi import FastAPI, File, UploadFile, HTTPException, Response
from fastapi.middleware.cors import CORSMiddleware;
from pymongo import MongoClient;
from pydantic import BaseModel;
from bson import ObjectId;
from pymongo.errors import PyMongoError;
import gridfs

app = FastAPI(title="Mr Park API using FastAPI")
conn = MongoClient("mongodb+srv://hansaliviru:mrparkadminpwd@mrpark.juwa5qh.mongodb.net/")
origins= ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials = True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# image start
# Setup MongoDB client
db = conn['image_db']
fs = gridfs.GridFS(db)

@app.get("/all-images/{id}")
async def get_all_images(id: str):
    try:
        files = []
        for file in fs.find({"id":id}):
            files.append({
                "file_id": str(file._id),
                "filename": file.filename,
                "id":file.id,
                "content_type": file.content_type
            })

        return  files
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")
     
@app.post("/upload/{id}")
async def upload_image(id : str ,file: UploadFile = File(...)):
    try:
        contents = await file.read()
        file_id = fs.put(contents, filename=file.filename,id=id)
        return {"file_id": str(file_id), "filename": file.filename,"id":id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")
    


@app.get("/image/{file_id}")
async def get_image(file_id: str):
    try:
        # Convert the file_id from string to ObjectId
        object_id = ObjectId(file_id)
        # Retrieve the file from GridFS
        grid_out = fs.get(object_id)
        # Create a Response object with the file's content and appropriate content type
       
        return Response(content=grid_out.read(), media_type="image/jpeg")  # Adjust media_type based on file type
    except gridfs.errors.NoFile:
        raise HTTPException(status_code=404, detail="File not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")
    

# image end

@app.get("/")
def get_owner_all_data():
    try:
        data= [ {"_id":str(item["_id"]),"id":item["id"],"company_name":item["company_name"],"name":item["name"],"email":item["email"],"phone_number":item["phone_number"],"address":item["address"],"car":item["car"],"bike":item["bike"],"threewheel":item["threewheel"],"car_charging_fee":item["car_charging_fee"],"bike_charging_fee":item["bike_charging_fee"],"threewheel_charging_fee":item["threewheel_charging_fee"],"bank_details":item["bank_details"]}for item in conn.test.owner.find()]
        if(data!=[]):
            return data
        else:
            raise HTTPException(status_code=404, detail="Owner not found")
    except PyMongoError as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")  
    except HTTPException as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

@app.get("/ownerAuthentication")
def get_all_ownerAuthentication_accounts():
    try:
        data= [{"_id":str(item["_id"]),"email":item["email"],"password":item["password"]}for item in conn.test.ownerAuthentication.find()]
        if data :
            if(data!=[]):
                return data
            else:
                raise HTTPException(status_code=404, detail="Owner not found")
        else :
            raise HTTPException(status_code=404, detail="Owner not found")
    except PyMongoError as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")  
    except HTTPException as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")
    

@app.get("/ownerAuthentication/{email}/{password}")
def get_id_in_ownerAuthentication_account(email : str , password : str):
    try:
        data= [{"_id":str(item["_id"])}for item in conn.test.ownerAuthentication.find({"email":email,"password":password})]
        if(data!=[]):
            return data
        else:
            raise HTTPException(status_code=404, detail="Owner not found")
    except PyMongoError as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")  
    except HTTPException as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

@app.get("/{id}")
def get_owner(id : str):
    try:
        data= [ {"_id":str(item["_id"]),"id":item["id"],"company_name":item["company_name"],"name":item["name"],"email":item["email"],"phone_number":item["phone_number"],"address":item["address"],"car":item["car"],"bike":item["bike"],"threewheel":item["threewheel"],"car_charging_fee":item["car_charging_fee"],"bike_charging_fee":item["bike_charging_fee"],"threewheel_charging_fee":item["threewheel_charging_fee"],"bank_details":item["bank_details"]}for item in conn.test.owner.find({"id":id})]
        
        if(data!=[]):
            return data
        else:
            raise HTTPException(status_code=404, detail="Owner not found")
    except PyMongoError as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")  
    except HTTPException as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")
    
@app.get("/company-details/{id}")
def get_company_details(id : str):
    try :
        data= [{"company_name":item["company_name"],"address":item["address"],"phone_number":item["phone_number"],"email":item["email"]} for item in conn.test.owner.find({"id":id})]
        if(data!=[]):
            return data
        else:
            raise HTTPException(status_code=404, detail="Owner not found")
    except PyMongoError as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")  
    except HTTPException as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

class Bank_details(BaseModel):
    bank_name : str
    branch_name : str
    name : str
    account_number : str


class Owner(BaseModel):
    id : str
    company_name : str
    name : str
    email : str
    phone_number : str
    address : str
    car : bool
    bike : bool
    threewheel : bool
    car_charging_fee : int
    bike_charging_fee : int
    threewheel_charging_fee : int
    bank_details : Bank_details

@app.post("/",status_code=201)
def insert_owner_data(owner : Owner):
    try:
        conn.test.owner.insert_one(owner.dict())
        return {"DATA":"Success"}
    except PyMongoError as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")  
    except HTTPException as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

@app.put("/{id}")
def update_all__owner_data(id : str,owner : Owner):
    try:
       result= conn.test.owner.find_one_and_update({"id":id},{"$set": owner.dict()},return_document=True)
       if(result):
            return [ {"_id":str(item["_id"]),"id":item["id"],"company_name":item["company_name"],"name":item["name"],"email":item["email"],"phone_number":item["phone_number"],"address":item["address"],"car":item["car"],"bike":item["bike"],"threewheel":item["threewheel"],"car_charging_fee":item["car_charging_fee"],"bike_charging_fee":item["bike_charging_fee"],"threewheel_charging_fee":item["threewheel_charging_fee"],"bank_details":item["bank_details"]}for item in conn.test.owner.find()]
       else:
            raise HTTPException(status_code=404, detail="Owner not found")
    except PyMongoError as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")  
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")


class Above(BaseModel):
    company_name : str
    name : str
    email : str
    phone_number : str


@app.put("/above/{id}")
def update_above_data(id : str ,data : Above):
    try:
        result = conn.test.owner.find_one_and_update({"id":id},{"$set":data.dict()},return_document=True)
        if(result):
            return [ {"_id":str(item["_id"]),"id":item["id"],"company_name":item["company_name"],"name":item["name"],"email":item["email"],"phone_number":item["phone_number"],"address":item["address"],"car":item["car"],"bike":item["bike"],"threewheel":item["threewheel"],"car_charging_fee":item["car_charging_fee"],"bike_charging_fee":item["bike_charging_fee"],"threewheel_charging_fee":item["threewheel_charging_fee"],"bank_details":item["bank_details"]}for item in conn.test.owner.find()]
        else:
            raise HTTPException(status_code=404, detail="Owner not found")
    except PyMongoError as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")  
    except HTTPException as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")


class Below(BaseModel):
    address : str
    car : bool
    bike : bool
    threewheel : bool
    car_charging_fee : int
    bike_charging_fee : int
    threewheel_charging_fee : int
    bank_details : Bank_details

@app.put("/below/{id}")
def update_below_data(id : str ,data : Below):
    try:
        result = conn.test.owner.find_one_and_update({"id":id},{"$set":data.dict()},return_document=True)
        if(result):
           return [ {"_id":str(item["_id"]),"id":item["id"],"company_name":item["company_name"],"name":item["name"],"email":item["email"],"phone_number":item["phone_number"],"address":item["address"],"car":item["car"],"bike":item["bike"],"threewheel":item["threewheel"],"car_charging_fee":item["car_charging_fee"],"bike_charging_fee":item["bike_charging_fee"],"threewheel_charging_fee":item["threewheel_charging_fee"],"bank_details":item["bank_details"]}for item in conn.test.owner.find()]
        else:
            raise HTTPException(status_code=404, detail="Owner not found")
    except PyMongoError as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")   
    except HTTPException as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

@app.delete("/{id}")
def delete_owner_data(id : str):
    try:
        conn.test.owner.delete_one({"id":id})
        return {"DATA":"Success"}
    except PyMongoError as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")  
    except HTTPException as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")
    
  