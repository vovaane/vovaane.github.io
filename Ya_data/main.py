import requests
import json
from google.cloud import bigquery
import os
os.environ["GOOGLE_APPLICATION_CREDENTIALS"]="adtechno-database-910a567f5cfd.json"

url = "https://partner2.yandex.ru/api/statistics2/get.json";
body = {
    "lang":"en",
    "pretty":2,
    "dimension_field":"date|day",
    "entity_field":["page_caption","block_caption"],
    "period":"yesterday",
    "field":["hits","shows","visibility","partner_wo_nds","cpmv_partner_wo_nds"],
}
headers = {'Authorization': 'OAuth AgAAAAA1PLq9AAbK7VOgG0p4B0lHuHg63kc1PNo'};
response = requests.get(url, body, headers=headers);
ya_data = response.json()

list_to_db = []
for i in range(len(ya_data["data"]["points"])):
        blocks_list ={"Date":ya_data["data"]["points"][i]["dimensions"]["date"][0],
                      "Site":ya_data["data"]["points"][i]["dimensions"]["page_caption"],
                      "Adunit":ya_data["data"]["points"][i]["dimensions"]["block_caption"],
                      "Requests":ya_data["data"]["points"][i]["measures"][0]["hits"],
                      "Impressions":ya_data["data"]["points"][i]["measures"][0]["shows"],
                      "Revenue":ya_data["data"]["points"][i]["measures"][0]["partner_wo_nds"],
                      "CPMV":ya_data["data"]["points"][i]["measures"][0]["cpmv_partner_wo_nds"]}
        list_to_db.append(blocks_list)

# Construct a BigQuery client object.
client = bigquery.Client()

# TODO(developer): Set table_id to the ID of table to append to.
table_id = "adtechno-database.yandex_ads.yandex_ads"

rows_to_insert = list_to_db

errors = client.insert_rows_json(
    table_id, rows_to_insert, row_ids=[None] * len(rows_to_insert)
)  # Make an API request.

def start_get_data():
    if errors == []:
        print("New rows have been added.")
    else:
        print("Encountered errors while inserting rows: {}".format(errors))
start_get_data()