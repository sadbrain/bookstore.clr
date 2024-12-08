#!/bin/bash
cd ../../

echo "Starting admin.clrtech on port 3001"
cd admin.clrtech
mintty --hold -e bash -c "npm start"
cd ..

echo "Starting client.clrtech on port 80"
cd client.clrtech
mintty --hold -e bash -c "npm start"
cd ..

echo Started auth.service.api on port 5001
cd services/auth.service.clrtech/auth.service.api
mintty --hold -e bash -c "dotnet run"
cd ../../..

echo Started payment.service.api on port 5005
cd services/payment.service.clrtech/payment.service.api
mintty --hold -e bash -c "dotnet run"
cd ../../..

echo Started order.service.api on port 5004
cd services/order.service.clrtech/order.service.api
mintty --hold -e bash -c "dotnet run"
cd ../../..

echo Started shopping.service.api on port 5003
cd services/shopping.service.clrtech
mintty --hold -e bash -c "npm start"
cd ../..

echo Started catalog.service.api on port 5003
cd services/catalog.service.clrtech
mintty --hold -e bash -c "npm start"
cd ../..