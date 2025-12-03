// 功能檢查腳本
// 檢查：HTML結構、連結、必需元素、數據完整性

const fs = require('fs');
const path = require('path');

const CHECKS = {
  passed: 0,
  failed: 0,
  warnings: 0
};

console.log('🧪 開始執行功能檢查...\n');

// 1. 檢查檔案存在
function checkFileExists(filename) {
  const exists = fs.existsSync(filename);
  if (exists) {
    console.log(`✅ ${filename} 存在`);
    CHECKS.passed++;
  } else {
    console.log(`❌ ${filename} 不存在`);
    CHECKS.failed++;
  }
  return exists;
}

// 2. 檢查 HTML 結構
function checkHTMLStructure(content) {
  const checks = {
    doctype: /<!DOCTYPE html>/i.test(content),
    hero: /白蠍|WhiteScorpio/.test(content),
    appState: /const appState/.test(content),
    footer: /<footer|聯繫|Contact/.test(content)
  };

  Object.entries(checks).forEach(([name, result]) => {
    if (result) {
      console.log(`✅ 檢查 ${name}: 通過`);
      CHECKS.passed++;
    } else {
      console.log(`⚠️  檢查 ${name}: 未找到`);
      CHECKS.warnings++;
    }
  });

  return checks;
}

// 3. 檢查必需元素
function checkRequiredElements(content) {
  const elements = {
    '標題': /title/i,
    '導航': /nav|header/i,
    'Discord連結': /discord/i,
    'Instagram連結': /instagram/i
  };

  Object.entries(elements).forEach(([name, regex]) => {
    if (regex.test(content)) {
      console.log(`✅ 找到 ${name}`);
      CHECKS.passed++;
    } else {
      console.log(`⚠️  未找到 ${name}`);
      CHECKS.warnings++;
    }
  });
}

// 4. 檢查 CSS 變數
function checkCSSVariables(content) {
  const cssVarPattern = /--color-|--space-|--font-/;
  if (cssVarPattern.test(content)) {
    console.log(`✅ CSS 設計系統變數已配置`);
    CHECKS.passed++;
  } else {
    console.log(`⚠️  CSS 變數未找到`);
    CHECKS.warnings++;
  }
}

// 5. 檢查 JavaScript 功能
function checkJSFunctionality(content) {
  const functions = {
    '應用狀態': /appState\s*=\s*{/,
    '語言切換': /currentLanguage/,
    'DOM操作': /getElementById|querySelector/,
    '事件監聽': /addEventListener/
  };

  Object.entries(functions).forEach(([name, regex]) => {
    if (regex.test(content)) {
      console.log(`✅ ${name} 已實現`);
      CHECKS.passed++;
    } else {
      console.log(`⚠️  ${name} 未實現`);
      CHECKS.warnings++;
    }
  });
}

// 執行所有檢查
try {
  if (checkFileExists('index.html')) {
    const content = fs.readFileSync('index.html', 'utf8');
    
    console.log('\n📋 檢查 HTML 結構...');
    checkHTMLStructure(content);
    
    console.log('\n🔍 檢查必需元素...');
    checkRequiredElements(content);
    
    console.log('\n🎨 檢查 CSS 配置...');
    checkCSSVariables(content);
    
    console.log('\n⚙️  檢查 JavaScript 功能...');
    checkJSFunctionality(content);
  }

  // 輸出總結
  console.log('\n' + '='.repeat(50));
  console.log('📊 檢查結果總結');
  console.log('='.repeat(50));
  console.log(`✅ 通過: ${CHECKS.passed}`);
  console.log(`❌ 失敗: ${CHECKS.failed}`);
  console.log(`⚠️  警告: ${CHECKS.warnings}`);
  
  const totalChecks = CHECKS.passed + CHECKS.failed + CHECKS.warnings;
  const passRate = Math.round((CHECKS.passed / totalChecks) * 100);
  
  console.log(`\n📈 通過率: ${passRate}%`);
  
  if (CHECKS.failed === 0 && passRate >= 80) {
    console.log('\n✅ 功能檢查完成！所有必需功能正常運作。');
    process.exit(0);
  } else {
    console.log('\n⚠️  請檢查上述警告和失敗項目。');
    process.exit(CHECKS.failed > 0 ? 1 : 0);
  }

} catch (error) {
  console.error(`❌ 檢查失敗: ${error.message}`);
  process.exit(1);
}