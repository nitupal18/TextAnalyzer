#include<iostream>
#include<bits/stdc++.h>
using namespace std;
int main(){
    int t;
    cin>>t;
    while(t--){
      int n;
      cin>>n;
      int a[n];
      for(int i=0;i<n;i++){
          cin>>a[i];
      }
      unordered_map<int,int> m;
      for(int i=1;i<=n;i++){
          m[i]=1;
      }
      for(int i=0;i<n;i++){
          int x=a[i];
          while(x>n || m[x]==2){
             x/=2;
          }
          if(m[x]==1){
              m[x]=2;
          }
      }
      string ans="YES";
      for(auto i:m){
          if(i.second!=2){
              ans="NO";
              break;
          }
      }
      cout<<ans<<endl;   
    }
}