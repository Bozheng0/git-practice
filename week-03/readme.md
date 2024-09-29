# 什麼是 AWS Region, AZ (availability zones)

## 1. AWS Region
- AWS Region 是一個地理區域，
- AWS 在全球不同地方劃分的資料中心群組。
- 每個 Region 都是獨立的地理區域，提供不同的 AWS 服務。
- 每個 Region 內的資源彼此之間的延遲低、傳輸快，但不同 Region 之間的距離可能會有較高的延遲。
- 每個 AWS Region 包含多個資料中心，但這些資料中心之間有物理上的距離，以防止地理災難影響所有資源。  
- 範例：  
        美國東部（北弗吉尼亞）us-east-1  
        歐洲（法蘭克福）eu-central-1  
        亞洲（東京）ap-northeast-1  


![](/asset/regions-and-zones.png)

圖片來源：<https://docs.aws.amazon.com/whitepapers/latest/get-started-documentdb/aws-regions-and-availability-zones.html>



## 2. AZ (availability zones)
- Availability Zone 是 Region 內的實體資料中心。
- 每個 AWS Region 由多個 AZ 組成，通常至少有兩個或更多的 AZ。
- AZ 之間具備高可用性和低延遲連接。
- 每個 AZ 是相對獨立的數據中心，擁有自己的電力供應、網絡連接等，並且互相備援。
- 如果某個 AZ 發生故障，另一個 AZ 可以接管服務，具備高可用性和容錯能力。


![](/asset/region-with-azs.png)

圖片來源：<https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html>

<br></br>

# 如果你要使用 AWS 服務，你會怎麼選擇用哪個 Region，考慮的因素有哪些？

### 1. **地理位置**：  
- 選擇距離最接近使用者的 Region 可以減少網路延遲。  
- 範例：  
如果客戶主要在亞洲，可以選擇位於亞洲的 Region (如 ap-northeast-1 東京)。


### 2. **法規**：  
- 某些國家或地區可能有數據主權或合規性要求，規定數據必須存儲在特定區域。選擇一個合規的 Region 可以滿足這些法規。  
- 範例：  
歐盟有 GDPR 規定，企業可能會選擇位於歐洲的 Region。


### 3. **成本**：
- 不同的 Region 之間，AWS 的服務費用可能有所不同。選擇成本較低且能滿足需求的 Region 可以幫助控制預算。


### 4. **故障備援和高可用性**：
- 冗餘設計：如果需要高可用性，選擇支持多個 AZ 的 Region，並在多個 AZ 之間進行服務的部署以防止單點故障。
- 跨區備份：某些情況下，需要跨 Region 備份數據，選擇 Region 時可以考慮便於備份和災難恢復的策略。


---
參考資源：  
- [AWS：Regions and Zones](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html)
- [AWS Regions and Availability Zones](https://docs.aws.amazon.com/whitepapers/latest/get-started-documentdb/aws-regions-and-availability-zones.html)
- [選擇區域-1](https://hackmd.io/@gdw7l5sPTOyNv76kZ_twjA/HyTvasj25#%E9%81%B8%E6%93%87%E5%8D%80%E5%9F%9F)
- [選擇區域-2](https://ithelp.ithome.com.tw/m/articles/10315419)
