from google.cloud import storage
import io

headers = {
    'Access-Control-Allow-Origin': '*'
}


def create_groove(request):
    created = save_groove()
    msg = "ERROR"
    if created:
        msg = "CREATED"
    
    return (msg, 200, headers)



def save_groove():
    bucket = "mma-bombaim"
    
    storage_client = storage.Client()
    bucket = storage_client.get_bucket(bucket)

    new_groove = bucket.blob("lib/bombaim/new_groove.mma")
    
    new_groove.upload_from_string("BETA TEST")

    return True

def update_grooves(event, context):
    # bucket name
    bucket = "grooves-bombaim"
    
    # Get the bucket that the file will be uploaded to.
    storage_client = storage.Client()
    bucket = storage_client.get_bucket(bucket)
    
    # Create a new blob and upload the file's content.
    grooves = bucket.blob('grooves/list_grooves.json')
    
    # upload from string
    grooves.upload_from_string("TEST")
    
    # Make the blob publicly viewable.
    grooves.make_public()
