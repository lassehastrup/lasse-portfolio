targetScope = 'subscription'
param resourceGroupName string
param location string
param webAppName string
param appServicePlanName string

resource webAppResourceGroup 'Microsoft.Resources/resourceGroups@2023-07-01' = {
  name: resourceGroupName
  location: location
}

module webApp 'webApp.bicep' = {
  name: webAppName
  scope: webAppResourceGroup
  params: {
    webAppName: webAppName
    location: location
    appServicePlanName: appServicePlanName
  }
}

